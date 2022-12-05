const express = require("express");
const {
  createNote,
  getNote,
  getNotes,
} = require("../controllers/notesController");

const router = express.Router();

// GET all notes
// router.get("/", (req, res) => {
//   res.json({ mssg: "GET all notes" });
// });
router.get("/", getNotes);

// GET a single note
router.get("/:id", getNote);

// POST a new note
router.post("/", createNote);

// DELETE a single note
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a single note" });
});

// UPDATE a note
router.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a single note" });
});

module.exports = router;
