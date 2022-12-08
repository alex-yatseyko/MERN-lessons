const Notes = require("../models/notesModel");
const mongoose = require("mongoose");

// Get all notes
const getNotes = async (req, res) => {
  const notes = await Notes.find({}).sort({ createdAt: -1 });

  res.status(200).json(notes);
};

// Get a single note
const getSingleNote = async (req, res) => {
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

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

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
  //   res.json({ mssg: "POST a new note" });
};

// Delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "There's no note with such id" });
  }

  const note = await Notes.findOneAndDelete({
    _id: id,
  });

  if (!note) {
    return res.status(404).json({ error: "There's no note with such id" });
  }

  res.status(200).json(note);
};

// Update a note
const updateNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "There's no note with such id" });
  }
  const note = await Notes.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!note) {
    return res.status(404).json({ error: "There's no note with such id" });
  }

  res.status(200).json(note);
};

module.exports = {
  createNote,
  getNotes,
  getSingleNote,
  deleteNote,
  updateNote,
};
