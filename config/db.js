const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("ma sha ALLAH mongo database connection establist");
  })
  .catch((error) => {
    console.log("error while mongo database connection", error);
  });
