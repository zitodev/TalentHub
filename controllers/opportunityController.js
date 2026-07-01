const Opportunity = require("../models/Opportunity");

// GET ALL

// exports.getOpportunities = async (req, res) => {
//   const { keyword, category, location } = req.query;

//   let filter = {};

//   if (keyword) {
//     filter.title = {
//       $regex: keyword,
//       $options: "i",
//     };
//   }

//   if (category) {
//     filter.category = category;
//   }

//   if (location) {
//     filter.location = location;
//   }

//   const data = await Opportunity.find(filter);

//   res.json(data);
// };

exports.getOpportunities = async (req, res) => {
  const page = Number(req.query.page) || 1;

  const limit = 6;

  const skip = (page - 1) * limit;

  const opportunities = await Opportunity.find().skip(skip).limit(limit);

  const total = await Opportunity.countDocuments();

  res.json({
    page,

    totalPages: Math.ceil(total / limit),

    data: opportunities,
  });
};

// GET ONE

exports.getOpportunity = async (req, res) => {
  const data = await Opportunity.findById(req.params.id);

  res.json(data);
};

// CREATE

exports.createOpportunity = async (req, res) => {
  const opportunity = await Opportunity.create({
    ...req.body,
    image: req.file ? `/uploads/${req.file.filename}` : undefined,
  });

  res.status(201).json({
    message: "Created",
    opportunity,
  });
};

// UPDATE

exports.updateOpportunity = async (req, res) => {
  const data = await Opportunity.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : undefined,
    },
    {
      new: true,
    },
  );

  res.json(data);
};

// DELETE

exports.deleteOpportunity = async (req, res) => {
  await Opportunity.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};
