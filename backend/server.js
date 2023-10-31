const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose
  .connect("mongodb://db:27017/aiReviewDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
