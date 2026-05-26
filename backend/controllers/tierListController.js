const TierList = require("./../Models/tierListModel");

exports.createTierList = async (req, res) => {
  try {
    const newList = await TierList.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        data: newList,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getTierList = async (req, res) => {
  try {
    const list = await TierList.find();

    res.status(200).json({
      status: "Success",
      data: {
        data: list,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
