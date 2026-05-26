const express = require("express");
const tierListController = require("../controllers/tierListController");

const router = express.Router();

router
  .route("/")
  .post(tierListController.createTierList)
  .get(tierListController.getTierList);

module.exports = router;
