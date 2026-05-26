const mongoose = require("mongoose");

const tierListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  games: [
    {
      gameId: Number,
      rank: Number,
    },
  ],
});

const TierList = mongoose.model("TierList", tierListSchema);

module.exports = TierList;
