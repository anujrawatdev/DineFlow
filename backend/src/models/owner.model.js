const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
      required: true,
    },

    businessLicense: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const OwnerRequest = mongoose.model("OwnerRequest", ownerSchema);

module.exports = OwnerRequest;