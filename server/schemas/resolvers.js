const { AuthenticationError } = require("apollo-server-express");
const { User, Skill } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate(["teachSkill", "learnSkill", "nextClass"]);
    },
    skills: async () => {
      return Skill.find().populate(["teachSkill", "learnSkill"]);
    },
    skill: async (parent, { skillId }) => {
      return Skill.findOne({ _id: skillId }).populate(["teacher", "students"]);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({
          email: context.user.email,
        }).populate(["teachSkill", "learnSkill", "nextClass"]);
      }
      throw new AuthenticationError("You must be signed in");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addLearnSkill: async (parent, { learnSkill }, context) => {
      console.log(context);
      if (context.user) {
        const skillExists = await Skill.findOne({ name: learnSkill });
        console.log(skillExists);
        if (skillExists) {
          //check to skill exists // if not create it// after add id
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { learnSkill: learnSkill._id } },
            {
              new: true,
            }
          ).populate(["teachSkill", "learnSkill", "nextClass"]);
        } else {
          const newSkill = await Skill.create({ name: learnSkill });
          console.log(newSkill);
          newSkill.students.push(context.user._id);
          await newSkill.save();
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { learnSkill: newSkill._id } },
            {
              new: true,
            }
          ).populate(["teachSkill", "learnSkill", "nextClass"]);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    addTeachSkill: async (parent, { teachSkill }, context) => {
      console.log(context);
      if (context.user) {
        const skillExists = await Skill.findOne({ name: teachSkill });
        console.log(skillExists);
        if (skillExists) {
          //check to skill exists // if not create it// after add id
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { teachSkill: teachSkill._id } },
            {
              new: true,
            }
          ).populate(["teachSkill", "learnSkill", "nextClass"]);
        } else {
          const newSkill = await Skill.create({ name: learnSkill });
          console.log(newSkill);
          newSkill.teacher.push(context.user._id);
          await newSkill.save();
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { teachSkill: newSkill._id } },
            {
              new: true,
            }
          ).populate(["teachSkill", "learnSkill", "nextClass"]);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    addClass: async (parent, { timeId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const skill = await Skill.find({ "availTimes._id": timeId });
      if (!skill) {
        throw error("invalid id");
      }
      return User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { nextClass: timeId }, $push: { learnSkill: skill._id } },
        {
          new: true,
        }
      ).populate(["teachSkill", "learnSkill", "nextClass"]);
    },
  },
};

module.exports = resolvers;
