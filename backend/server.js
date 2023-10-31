const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose
  .connect("mongodb://db:27017/aiReviewDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...")
  })
  .catch((err) => {
    console.log(err)
  });
const apiRoutes = require("./routes/api");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
