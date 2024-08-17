const { postBlog, postMember, postEvent } = require("../controllers/AdminController");

const router = require("express").Router();

router.post('/blogs', postBlog);
router.post('/members', postMember);
router.post('/events', postEvent);

module.exports = router;