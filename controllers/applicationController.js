const Application = require("../models/application");
const transporter = require("../utils/email");

exports.submitApplication = async (req, res) => {
  try {
    const oppId = req.params.id;
    const app = await Application.create({
      ...req.body,
      opportunity: oppId,
      cv: req.file ? `/uploads/${req.file.filename}` : undefined,
    });
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: "Application Received",
        text: `Dear ${req.body.fullName},\n\nThank you for applying for the opportunity. We have received your application and will review it shortly.\n\nBest regards,\nThe Team`,
      });
    } catch (err) {
      console.error("Error sending email:", err);
    }

    res.status(201).json({
      message: "Application submitted",

      app,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting application" });
  }
};

exports.listApplications = async (req, res) => {
  const apps = await Application.find().populate("opportunity");

  res.json(apps);
};
