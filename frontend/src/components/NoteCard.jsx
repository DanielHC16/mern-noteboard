import React from 'react'
import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';
 
// 2:24:00

const NoteCard = ({note, setNotes}) => {

  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the nav behavior

    if(!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id)); // get rid of deleted note from array
    } catch (error) {
      toast.error("Failed to delete note. Please try again later.");
      console.log("Error deleting note:", error);
    }
  };

  return (
    <div className="card bg-gradient-to-br from-primary/10 to-base-100 shadow-xl hover:shadow-2xl transition-all duration-200 border-t-4 border-secondary/80 hover:border-accent scale-100 hover:scale-[1.03]">
      <div className="card-body">
        <h3 className="card-title text-base-content font-bold text-lg">{note.title}</h3>
        <p className="text-base-content/80 line-clamp-3">{note.content}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-2">
            <Link to={`/note/${note._id}`}>
              <PenSquareIcon className="size-4 hover:text-accent" />
            </Link>
            <button className="btn btn-ghost btn-xs text-error hover:bg-error/10" onClick={(e) => handleDelete(e, note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard