const { getBlogs, getMembers } = require("../controllers/UserController");

const router = require("express").Router();

router.get("/blogs", getBlogs)
router.get("/members", getMembers)

module.exports = router;