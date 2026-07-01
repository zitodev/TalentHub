const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },

    category: {
      type: String,
      enum: ["Job", "Internship", "Training", "Workshop", "Summer School"],
    },

    opportunityType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Volunteer"],
    },

    description: String,

    location: String,

    duration: String,

    responsibilities: [String],

    requirements: [String],

    benefits: [String],

    startDate: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Opportunity", opportunitySchema);
