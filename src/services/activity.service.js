const ActivityLog = require("../models/ActivityLog");
const redisClient = require("../config/redis");

const REDIS_KEY = "recent_activities";
const TTL_SECONDS = 60 * 60; // 1 hour

async function logActivity(data) {
  // 1️⃣ Save to MongoDB
  const log = await ActivityLog.create(data);

  // 2️⃣ Push to Redis (list)
  await redisClient.lPush(REDIS_KEY, JSON.stringify(log));

  // 3️⃣ Keep only last 10
  await redisClient.lTrim(REDIS_KEY, 0, 9);

  // 4️⃣ Set TTL
  await redisClient.expire(REDIS_KEY, TTL_SECONDS);

  return log;
}

async function getRecentActivities() {
  const cachedLogs = await redisClient.lRange(REDIS_KEY, 0, -1);

  if (cachedLogs.length) {
    return cachedLogs.map(JSON.parse);
  }

  // fallback to MongoDB
  return ActivityLog.find().sort({ createdAt: -1 }).limit(10);
}

module.exports = {
  logActivity,
  getRecentActivities,
};
