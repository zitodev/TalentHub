const router = require("express").Router();
const upload = require("../middlewares/uploadMiddleware");

const controller = require("../controllers/opportunityController");

router.get("/get-all-opportunities", controller.getOpportunities);

router.get("/get-opportunity/:id", controller.getOpportunity);

router.post(
  "/create-opportunity",
  upload.single("image"),
  controller.createOpportunity,
);

router.put(
  "/update-opportunity/:id",
  upload.single("image"),
  controller.updateOpportunity,
);

router.delete("/delete-opportunity/:id", controller.deleteOpportunity);

module.exports = router;
