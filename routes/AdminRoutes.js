const { postBlog, postMember, postEvent, postClass, upload, uploadImage } = require("../controllers/AdminController");

const router = require("express").Router();

router.post('/upload-image', upload, uploadImage);
router.post('/blogs', postBlog);
router.post('/members', postMember);
router.post('/events', postEvent);
router.post('/classes', postClass);

module.exports = router;