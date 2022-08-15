const { Schema, model } = require('mongoose')

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
})

const Skill = model('Skill', skillSchema)

module.exports = Skill
