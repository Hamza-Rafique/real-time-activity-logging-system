const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema(
  {
    userId: String,
    action: String,
    metadata: Object,
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = mongoose.model("ActivityLog", activityLogSchema);
