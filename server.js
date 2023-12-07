const express = require("express");
const ExpressServer = express();

const PORT = process.env.PORT || 8080;

ExpressServer.listen(PORT, () => {
  console.log(`ma sha ALLAH ALHAAMDULILLAH express running @At ${PORT}`);
});
