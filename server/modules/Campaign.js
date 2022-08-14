const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  socials: {
    twitter: {
      type: String,

      default: "",
    },
    facebook: {
      type: String,

      default: "",
    },
    whatsapp: {
      type: String,

      default: "",
    },
    gofundme: {
      type: String,

      default: "",
    },
  },
  file: {
    type: String,
    default: "None",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
