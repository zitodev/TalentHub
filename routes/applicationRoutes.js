const router = require("express").Router();
const upload = require("../middlewares/uploadMiddleware");

const controller = require("../controllers/applicationController");

router.post(
  "/submit-applications/:id",
  upload.single("cv"),
  controller.submitApplication,
);

router.get("/application-list", controller.listApplications);

module.exports = router;
