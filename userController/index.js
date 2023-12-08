const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

  // check user using email
  // compare password
  // create jwt token
  // send response to client
  loginUser: async (req, res) => {
    // res.send("ALHAAMDULILLAH login success");
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Auth Failed, Invalid username/password" });
      }
      const isPassEqual = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPassEqual) {
        return res
          .status(401)
          .json({ message: "Auth Failed, Invalid username/password" });
      }
      const tokenObject = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      };
      const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {
        expiresIn: "4h",
      });
      return res.status(200).json({ jwtToken, tokenObject });
    } catch (error) {
      return res.status(500).json({ message: "error", error });
    }
  },
};
