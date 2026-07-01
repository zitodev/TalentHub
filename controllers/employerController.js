const EmployerRequest = require("../models/EmployerRequest");

exports.submitRequest = async (req, res) => {
  const request = await EmployerRequest.create(req.body);

  res.status(201).json({
    message: "Request sent",

    request,
  });
};

exports.listRequests = async (req, res) => {
  const data = await EmployerRequest.find();

  res.json(data);
};
