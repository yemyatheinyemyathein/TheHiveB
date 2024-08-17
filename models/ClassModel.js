const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  feedbackText: {
    type: String,
    required: true,
  },
  feedbackBy: {
    type: String,
    required: true,
  },
});

const TutorSchema = new Schema({
  tutorName: {
    type: String,
    required: true,
  },
  classDuration: {
    type: String,
    required: true,
  },
  feedbacks: [FeedbackSchema],
});

const ClassSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  classSizeLimit: {
    type: String,
    required: true,
  },
  tutor: [TutorSchema],
});

module.exports = mongoose.model("Classes", ClassSchema);
