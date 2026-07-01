const router = require("express").Router();
const upload = require("../middlewares/uploadMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const controller = require("../controllers/employerController");

router.post("/submit-request", controller.submitRequest);
router.get("/get-requests", authMiddleware, controller.listRequests);
module.exports = router;
