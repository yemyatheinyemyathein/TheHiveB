const Blogs = require("../models/BlogModel")
const Members = require("../models/MemberModel")

exports.getBlogs = async (req, res) => {
    try {
        const BlogsData = await Blogs.find();
        if(BlogsData){
            return res.status(200).json(BlogsData);
        } else {
            return res.status(404).json({message: "No Data Yet!"});
        }
    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error', error: error.message});
    }
}

exports.getMembers = async (req, res) => {
    try {
        const MembersData =await Members.find();
        if(MembersData){
            return res.status(200).json(MembersData);
        }else {
            return res.status(404).json({message: "No Data Yet!"});
        }
    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error', error: error.message});
    }
}