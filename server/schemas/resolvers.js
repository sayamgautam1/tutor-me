const { AuthenticationError } = require("apollo-server-express");
const { User, Skill, Booktime } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate(["teacher", "students", "skills"]);
    },
    skills: async () => {
      return Skill.find().populate(["teacher", "students", "availTimes"]);
    },
    skill: async (parent, { skillId }) => {
      return Skill.findOne({ _id: skillId }).populate([
        "teacher",
        "students",
        "availTimes",
      ]);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({
          email: context.user.email,
        }).populate(["learnSkill", "teachSkill", "nextClass"]);
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
          );
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
          ).populate("learnSkill");
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    addTeachSkill: async (
      parent,
      { teachSkill, classLength, description },
      context
    ) => {
      console.log(context);
      if (context.user) {
        const skillExists = await Skill.findOne({ name: teachSkill });
        console.log(skillExists);
        if (skillExists) {
          //check to skill exists // if not create it// after add id
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { teachSkill: skillExists._id } },
            {
              new: true,
            }
          );
        } else {
          const newSkill = await Skill.create({ name: teachSkill });
          console.log(newSkill);
          newSkill.teacher.push(context.user._id);
          await newSkill.save();
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { teachSkill: newSkill._id } },
            {
              new: true,
            }
          ).populate("teachSkill");
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    addClass: async (parent, { classId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const time = await Booktime.findOne({ _id: classId });

      if (!time) {
        throw new console.error("no time availabe");
      }
      const skill = await Skill.findOne({ availTimes: classId });

      const user = await User.findOne({
        _id: context.user._id,
      });
      userLearnSkill = user.learnSkill;

      const userSkillExists = userLearnSkill.includes(skill._id);

      if (userSkillExists) {
        //check to skill exists // if not create it// after add id
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { nextClass: time._id } },
          {
            new: true,
          }
        ).populate("nextClass");
      } else {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: { learnSkill: skill._id, nextClass: time._id },
            // $push: { nextClass: time._id },
          },
          {
            new: true,
          }
        ).populate(["learnSkill", "nextClass"]);
      }
    },
    removeTeachSkill: async (parent, { skillId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { teachSkill: skillId } },
        { new: true }
      );
    },
    removeLearnSkill: async (parent, { skillId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { learnSkill: skillId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
