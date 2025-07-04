import { response } from "express";
import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
    
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes Controller:", error);
        res.status(500).json({ message: "Error fetching notes", error: error.message });
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id).sort({ createdAt: -1 }); // Sort by createdAt in descending order
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById Controller:", error);
        res.status(500).json({ message: "Error updating notes", error: error.message });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote Controller:", error);
        res.status(500).json({ message: "Error creating a note", error: error.message });
    }
}

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},
            { new: true } // new: true returns the updated document
        );
        // If the note is not found, findByIdAndUpdate returns null
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote Controller:", error);
        res.status(500).json({ message: "Error updating a note", error: error.message });
    }
}

export async function deleteNote(req, res)  {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully", note: deletedNote });
    } catch (error) {
        console.error("Error in deleteNote Controller:", error);
        res.status(500).json({ message: "Error deleting a note", error: error.message });
    }
}