const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  classLength: {
    type: Number,
    required: false,
  },
  teacher: {
    type: String,
    required: true,
    trim: true,
  },
  students: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
