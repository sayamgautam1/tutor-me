const { Schema, model } = require("mongoose");

const timeSchema = new Schema({
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
});
const BookTime = model("BookTime", timeSchema);
module.exports = BookTime;
