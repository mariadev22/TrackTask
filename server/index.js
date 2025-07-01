require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Notes = require("./models/Notes");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Obtener todas las notas
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Notes.find();
    if (!notes) {
      throw new Error("A ocurrido un error al obtener la nota");
    }
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "A ocurrido un error al obtener la nota...." });
  }
});

// Obtener notas por id
app.get("/api/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const notes = await Notes.findById(noteId);
    if (!notes) {
      throw new Error("A ocurrido un error al obtener las notas");
    }
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "A ocurrido un error al obtener las notas..." });
  }
});

// Crear una nota
app.post("/api/notes", async (req, res) => {
  try {
    const { title, description } = req.body;
    const notes = await Notes.create({ title, description });
    if (!notes) {
      throw new Error("A ocurrido un error al crear la nota");
    }
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "A ocurrido un error al crear la nota..." });
  }
});

// Actualizar una nota por id
app.put("/api/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, description } = req.body;
    const notes = await Notes.findByIdAndUpdate(noteId, { title, description });
    if (!notes) {
      throw new Error("A ocurrido un error al actualizar la nota");
    }
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "A ocurrido un error al actualizar la nota..." });
  }
});

// Eliminar una nota por id
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const notes = await Notes.findByIdAndDelete(noteId);
    if (!notes) {
      throw new Error("A ocurrido un error al eliminar la nota");
    }
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "A ocurrido un error al eliminar la nota..." });
  }
});

app.get("/", (req, res) => {
  res.json("Hola mundo!");
});

app.get("/not-found", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en el Puerto: ${PORT}`);
});
