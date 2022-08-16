const { Schema, model } = require("mongoose");

const timeSchema = new Schema({
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
});
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
  description: {
    type: String,
    required: false,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  availTimes: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookTime",
    },
  ],
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
