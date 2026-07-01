const Opportunity = require("../models/Opportunity");
const Application = require("../models/Application");
const Employer = require("../models/EmployerRequest");

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
