const express = require("express");
const routes = require("./routes");
const ExpressServer = express();

const PORT = process.env.PORT || 8080;

ExpressServer.use("/api/v1", routes);

ExpressServer.listen(PORT, () => {
  console.log(`ma sha ALLAH ALHAAMDULILLAH express running @At ${PORT}`);
});
