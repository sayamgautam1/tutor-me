const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  age: {
    type: String,
    // required: true,
    trim: true,
  },
  location: {
    type: String,
    // required: true,
    trim: true,
  },
  teachSkill: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
  learnSkill: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ], /// pernsonal details ,, array of courses. array of courses they can teach
  // If your user needs more properties, add them here. Don't forget to add them to the typeDefs.js, resolvers.js and the userSeeds.
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
