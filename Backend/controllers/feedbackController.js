const Feedback = require("../models/Feedback");

// POST feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, rating, comments } = req.body;

    const newFeedback = await Feedback.create({
      name,
      rating,
      comments,
    });

    res.status(201).json({
      success: true,
      data: newFeedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create feedback",
      error: error.message,
    });
  }
};

// GET all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
      error: error.message,
    });
  }
};