const activityService = require("../services/activity.service");

exports.createLog = async (req, res) => {
  const log = await activityService.logActivity(req.body);
  res.status(201).json(log);
};

exports.getLogs = async (req, res) => {
  const logs = await activityService.getRecentActivities();
  res.json(logs);
};
