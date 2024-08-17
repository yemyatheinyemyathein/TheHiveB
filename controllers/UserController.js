const Blogs = require("../models/BlogModel");
const Members = require("../models/MemberModel");
const Events = require("../models/EventModel");
const Classes = require("../models/ClassModel");

exports.getBlogs = async (req, res) => {
  try {
    const BlogsData = await Blogs.find();
    if (BlogsData) {
      return res.status(200).json(BlogsData);
    } else {
      return res.status(404).json({ message: "No Data Yet!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
exports.getBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blogs.findById(id);
    if (blog) {
      return res.status(200).json(blog);
    } else {
      return res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const MembersData = await Members.find();
    if (MembersData) {
      return res.status(200).json(MembersData);
    } else {
      return res.status(404).json({ message: "No Data Yet!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
exports.getMember = async (req, res) => {
  try {
    const { id } = req.params;

    const member = await Members.findById(id);
    if (member) {
      return res.status(200).json(member);
    } else {
      return res.status(404).json({ message: "Member not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const EventsData = await Events.find();
    if (EventsData) {
      return res.status(200).json(EventsData);
    } else {
      return res.status(404).json({ message: "No Data Yet!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
exports.getEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Events.findById(id);
    if (event) {
      return res.status(200).json(event);
    } else {
      return res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const ClassesData = await Classes.find();
    if (ClassesData) {
      return res.status(200).json(ClassesData);
    } else {
      return res.status(404).json({ message: "No Data Yet!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
exports.getClass = async (req, res) => {
    try {
      const { id } = req.params;
  
      const classs = await Classes.findById(id);
      if (classs) {
        return res.status(200).json(classs);
      } else {
        return res.status(404).json({ message: "Class not found" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  };