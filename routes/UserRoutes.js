const { getBlogs, getMembers, getEvents, getClasses, getBlog, getMember, getEvent, getClass } = require("../controllers/UserController");

const router = require("express").Router();

router.get("/blogs", getBlogs)
router.get("/blogs/:id?", getBlog);
router.get("/members", getMembers)
router.get("/members/:id?", getMember)
router.get("/events", getEvents)
router.get("/events/:id?", getEvent)
router.get("/classes", getClasses)
router.get("/classes/:id?", getClass)

module.exports = router;