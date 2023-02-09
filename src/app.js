const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Cors
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration

// Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require("./routes/index"));

// Static files
app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;
