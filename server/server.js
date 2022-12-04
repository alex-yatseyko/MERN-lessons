const express = require("express");
require("dotenv").config();

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method); // Logging request details in the terminal
  next();
});

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
