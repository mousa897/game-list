const express = require("express");
const listRouter = require("./routes/tierListRoutes");

const app = express();

// 1) MIDDLEWARE
app.use(express.json());

// 2) ROUTES
app.use("/api/v1/list", listRouter);

module.exports = app;
