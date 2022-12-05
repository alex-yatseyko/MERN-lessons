require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/notes");
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method); // Logging request details in the terminal
  next();
});

// routes
app.use("/api/notes", routes);

// mongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // lsitern for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to MongoDB and listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
