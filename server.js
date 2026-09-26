require("dotenv").config();
require("./polyfill");
require("module-alias/register");

const express = require("express");
const cors = require("cors");

const customResponse = require("@/middlewares/customResponse");
const rootRouter = require("@/routes");
const errorHanadle = require("@/middlewares/errorHandle");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(customResponse);

app.use("/api", rootRouter);

// Error handle
app.use(errorHanadle);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
