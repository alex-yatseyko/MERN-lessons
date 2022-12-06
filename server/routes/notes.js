const express = require("express");
const {
  createNote,
  getSingleNote,
  getNotes,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();

// GET all notes
router.get("/", getNotes);

// GET a single note
router.get("/:id", getSingleNote);

// POST a new note
router.post("/", createNote);

// DELETE a single note
router.delete("/:id", deleteNote);

// UPDATE a note
router.patch("/:id", updateNote);

module.exports = router;
