const Notes = require("../models/notesModel");
const mongoose = require("mongoose");

// Get all notes
const getNotes = async (req, res) => {
  const notes = await Notes.find({}).sort({ createdAt: -1 });

  res.status(200).json(notes);
};

// Get a single note
const getNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "There's no note with such id" });
  }

  const note = await Notes.findById(id);

  if (!note) {
    return res.status(404).json({ error: "There's no note with such id" });
  }

  res.status(200).json(note);
};

// Create new note
const createNote = async (req, res) => {
  const { title, body } = req.body;

  // Add note to db
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
};

module.exports = {
  createNote,
  getNotes,
  getNote,
};
