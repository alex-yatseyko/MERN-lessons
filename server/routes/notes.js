const express = require("express");
const Notes = require("../models/notesModel");

const router = express.Router();

// GET all notes
router.get("/", (req, res) => {
  res.json({ mssg: "GET all notes" });
});

// GET a single note
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single note" });
});

// POST a new note
router.post("/", async (req, res) => {
  const { title, body } = req.body;
  try {
    const note = await Notes.create({
      title,
      body,
    });
    res.status(200).json(note);
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
  res.json({ mssg: "POST a new note" });
});

// DELETE a single note
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a single note" });
});

// UPDATE a note
router.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a single note" });
});

module.exports = router;
