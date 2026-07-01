const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    companyName: String,

    contactPerson: String,

    email: String,

    phone: String,

    country: String,

    requestType: String,

    numberOfCandidates: Number,

    message: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("EmployerRequest", employerSchema);
