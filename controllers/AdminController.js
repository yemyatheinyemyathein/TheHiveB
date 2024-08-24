const BlogModel = require("../models/BlogModel");
const MemberModel = require("../models/MemberModel");
const EventModel = require("../models/EventModel");
const ClassModel = require("../models/ClassModel");

const cloudinary = require('../cloudinaryConfig');
const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');

const parser = new DatauriParser();

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

// Function to convert buffer to data URI
const dataUri = (req) => parser.format(path.extname(req.file.originalname).toString(), req.file.buffer);


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

    if (!name || !img || !about || !department || !position) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const newMember = new MemberModel({
      name,
      img,
      about,
      department,
      position,
      socialLinks,
    });

    const savedMember = await newMember.save();

    res.status(201).json({
      message: 'Member Created Successfully',
      member: savedMember,
    });
  } catch (error) {
    console.error('Error Posting Member:', error);
    res.status(500).json({
      message: 'Internal Server Error',
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