const BlogModel = require("../models/BlogModel");
const MemberModel = require("../models/MemberModel");
const EventModel = require("../models/EventModel");
const ClassModel = require("../models/ClassModel");
const cloudinary = require("../cloudinaryConfig")
const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.postBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      imageSrc,
      imageAlt,
      author,
      authorImage,
      readingDuration,
      content,
    } = req.body;

    const newBlog = new BlogModel({
      title,
      description,
      imageSrc,
      imageAlt,
      author,
      authorImage,
      readingDuration,
      content,
    });

    const SavedBlog = await newBlog.save();
    res.status(201).json({
      message: "Blog Created Successfully",
      blog: SavedBlog,
    });
  } catch (error) {
    console.log("Error Posting Blog:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.postMember = async (req, res) => {
  try {
    const { name, img, about, department, position, socialLinks } = req.body;
    const newMember = new MemberModel({
      name,
      img,
      about,
      department,
      position,
      socialLinks,
    });

    const SavedMember = await newMember.save();
    res.status(201).json({
      message: "Member Created Successfully",
      member: SavedMember,
    });
  } catch (error) {
    console.log("Error Posting Member :", error.message);
    res.status(500).json({
      message: "Internal Sever Error",
      error: error.message,
    });
  }
};

exports.postEvent = async (req, res) => {
  try {
    const {
      date,
      about,
      description,
      speakers,
      guestSpeakers,
      counsellors,
      attendees,
      feedbacks,
    } = req.body;

    const newEvent = new EventModel({
      date,
      about,
      description,
      speakers,
      guestSpeakers,
      counsellors,
      attendees,
      feedbacks,
    });

    const SavedEvent = await newEvent.save();
    res.status(201).json({
      message: "Event Created Successfully",
      event: SavedEvent,
    });
  } catch (error) {
    console.log("Error Posting Event:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.postClass = async (req, res) => {
  try {
    const { className, classSizeLimit, tutor } = req.body;

    const newClass = new ClassModel({
      className,
      classSizeLimit,
      tutor,
    });

    const SavedClass = await newClass.save();
    res.status(201).json({
      message: "Class Created Successfully",
      event: SavedClass,
    });
  } catch (error) {
    console.log("Error Posting Class:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


exports.uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) {
          return res.status(500).json({ message: 'Image upload failed', error });
        }
        res.status(200).json({ imageUrl: result.secure_url });
      }
    ).end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

module.exports.upload = upload.single('image');
