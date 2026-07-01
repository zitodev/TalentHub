const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: String,

    email: String,

    phone: String,

    opportunity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Opportunity",
    },

    cv: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);
