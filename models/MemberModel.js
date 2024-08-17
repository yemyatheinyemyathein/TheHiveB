const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialSchema = new Schema({
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
        type: String
    },
    linkedIn: {
        type: String
    },
  });

const MemberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img : {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: true
    },
    department : {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    socialLinks: [
        SocialSchema
    ]
})

module.exports = mongoose.model("Members", MemberSchema);