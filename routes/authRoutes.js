const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const adminController = require("../controllers/adminController");
const upload = require("../middlewares/uploadMiddleware");
const controller = require("../controllers/authController");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/dashboard", authMiddleware, adminController.dashboard);
router.get("/check", authMiddleware, controller.checkAuth);

router.post("/logout", controller.logout);
module.exports = router;
