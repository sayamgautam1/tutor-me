const { Schema, model } = require('mongoose')

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  classLength: {
    type: Number,
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
})

const Skill = model('skill', skillSchema)

module.exports = Skill
