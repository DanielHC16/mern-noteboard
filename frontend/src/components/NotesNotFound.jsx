import React from 'react';
import { NotebookIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

const NotesNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral px-4 rounded-2xl">
            <div className="bg-primary/10 rounded-full p-8 mb-6 shadow-xl animate-bounce-slow">
                <NotebookIcon className="mx-auto size-20 text-primary drop-shadow-lg background-" />
            </div>
            <h3 className="text-3xl font-extrabold mb-3 text-base-content tracking-tight">
                No notes found
            </h3>
            <p className="mb-8 text-neutral-content max-w-md text-center text-lg">
                It looks like you haven&apos;t created any notes yet.<br />
                Start capturing your ideas and thoughts now!
            </p>
            <Link
                to="/create"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 transition-all text-lg"
            >
                <PlusIcon className="size-6" />
                Create Your First Note
            </Link>
        </div>
    );
};

export default NotesNotFound;