require("dotenv").config();
const app = require("./app");
const connectMongo = require("./config/mongo");
const redisClient = require("./config/redis");

(async () => {
  await connectMongo();
  await redisClient.connect();

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})();
