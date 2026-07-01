const Opportunity = require("../models/opportunity");
const Application = require("../models/application");
const Employer = require("../models/employerRequest");

exports.dashboard = async (req, res) => {
  const opportunities = await Opportunity.countDocuments();

  const applications = await Application.countDocuments();

  const employers = await Employer.countDocuments();

  res.json({
    opportunities,

    applications,

    employers,
  });
};
