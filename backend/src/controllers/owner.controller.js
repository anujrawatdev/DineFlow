const OwnerRequest = require("../models/owner.model");
const User = require("../models/user.model");

async function createOwner(req, res) {
  try {
    const { phone, experience, reason, businessLicense } = req.body;

    if (!phone || !experience || !reason) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (req.user.role === "owner") {
      return res.status(400).json({
        message: "You are already an owner",
      });
    }

    const existingRequest = await OwnerRequest.findOne({
      user: req.user._id,
      status: "pending",
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "You already have a pending request",
      });
    }

    await OwnerRequest.create({
      user: req.user._id,
      phone,
      experience,
      reason,
      businessLicense,
    });

    return res.status(201).json({
      message: "Owner request submitted successfully",
    });
  } catch (error) {
    console.log("Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function getOwnerRequests(req, res) {
  try {
    const requests = await OwnerRequest.find({ status: "pending" }).populate(
      "user",
      "name email",
    );

    res.status(200).json(requests);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function approveOwnerRequest(req, res) {
  try {
    const request = await OwnerRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    await User.findByIdAndUpdate(request.user, { role: "owner" });

    request.status = "approved";
    await request.save();

    res.status(200).json({
      message: "Owner request approved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function rejectOwnerRequest(req, res) {
  try {
    const request = await OwnerRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "request not found " });
    }

    request.status = "rejected";
    await request.save();

    res.status(200).json({
      message: "Owner request rejected successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
module.exports = {
  createOwner,
  getOwnerRequests,
  rejectOwnerRequest,
  approveOwnerRequest,
};
