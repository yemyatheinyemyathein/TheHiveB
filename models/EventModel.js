const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  speakers: [
    {
      type: String,
      required: false,
    },
  ],
  guestSpeakers: [
    {
      type: String,
      required: false,
    },
  ],
  counsellors: [
    {
      type: String,
      required: false,
    },
  ],
  attendees: {
    type: String,
    required: true,
  },
  feedbacks: [
    {
      type: String,
      required: false,
    },
  ],
});

EventsSchema.pre("save", function (next) {
  if (typeof this.date === "string") {
    this.date = new Date(this.date);
  }
  next();
});

module.exports = mongoose.model("Events", EventsSchema);
