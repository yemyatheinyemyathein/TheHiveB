const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: [
    {
      type: String,
    },
  ],
});

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
  },
  imageAlt: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
  },
  readingDuration: {
    type: Number,
    required: true,
  },
  content: [
    ContentSchema
  ],
});

module.exports = mongoose.model("Blogs", BlogSchema);
