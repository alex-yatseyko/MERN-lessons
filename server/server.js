require("dotenv").config();

const express = require("express");
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

// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
// });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
