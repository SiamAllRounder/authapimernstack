const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
module.exports = {
  // validate req.body - Done
  // create MongoDB UserModel - Done
  // do password encryption - Done
  // save data to mongodb
  registerUser: async (req, res) => {
    // if uncomment the line below node mon may crash
    // res.send("ALHAAMDULILLAH register success");
    const userModel = new UserModel(req.body);
    userModel.password = await bcrypt.hash(req.body.password, 10);
    try {
      const response = await userModel.save();
      // be aware never expose password to client protect it like this way
      response.password = undefined;
      return res
        .status(201)
        .json({ message: "ALHAAMDULILLAH success", data: response });
    } catch (error) {
      return res.status(500).json({ message: "error", error });
    }
  },
  loginUser: (req, res) => {
    res.send("ALHAAMDULILLAH login success");
  },
};
