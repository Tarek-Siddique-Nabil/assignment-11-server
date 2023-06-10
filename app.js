const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require("./Config/db");
// path
const serviceRoute = require("./Routes/service.route");
const orderRoute = require("./Routes/order.route");
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/// Route //
app.use("/service", serviceRoute);
app.use("/order", orderRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./Views/index.html");
});
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/Views/NotFound.html");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Broke",
  });
});

module.exports = app;
