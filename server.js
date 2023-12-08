const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const ExpressServer = express();
require("dotenv").config();
require("./config/db");

const PORT = process.env.PORT || 8080;

// IT is a middle ware this is very important for parse body
ExpressServer.use(bodyParser.json());

ExpressServer.use("/api/v1", routes);

ExpressServer.listen(PORT, () => {
  console.log(`ma sha ALLAH ALHAAMDULILLAH express running @At ${PORT}`);
});
