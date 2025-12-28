const express = require("express");
const logsRoutes = require("./routes/logs.routes");

const app = express();
app.use(express.json());

app.use("/api", logsRoutes);

module.exports = app;
