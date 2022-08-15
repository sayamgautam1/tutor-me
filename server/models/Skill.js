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
    new Schema({
      startTime: {
        type: Date,
      },
      endTime: {
        type: Date,
      },
    }),
  ],
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
