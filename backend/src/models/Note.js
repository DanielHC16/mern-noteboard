import mongoose from "mongoose";

// 1 - Create a schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
}, {timestamps:true}); // CreatedAt, UpdatedAt timestamps

// 2 - Create a model off of that schema

const Note = mongoose.model("Note", noteSchema);

export default Note;