'use client';

import { useState } from 'react';

const OrderNote = ({ note, onUpdateNote, orderData }) => {
    const [notes, setNotes] = useState([{ content: note, isOriginal: true }]);
    const [editedNote, setEditedNote] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editedNote.trim()) {
            const newNote = {
                content: editedNote,
                isOriginal: false
            };
            setNotes(prevNotes => [...prevNotes, newNote]);

            const notesContent = [...notes, newNote].map(n => n.content).join("\n");

            onUpdateNote(notesContent);
            setEditedNote('');
        }
    };

    return (
        <div className="p-2">
            <div className="flex items-center">
                <p className="flex-grow-0 font-medium text-gray-800">Order Notes</p>
                <div className="flex-grow h-px bg-gray-200 ml-2.5" />
            </div>
            <div className="p-2">
                <div className="space-y-4">
                    {notes.map((note, index) => (
                        <div key={index}>
                            <p className="my-1 font-medium text-gray-500">{note.isOriginal ? "Checkout note from you" : `Note from ${orderData.supplier.business_name}`}</p>
                            <p className="font-medium text-gray-800">{note.content}</p>
                        </div>
                    ))}
                </div>
                <div className="border-t-2 border-dashed border-gray-200 mt-4 pt-4">
                    <p className="text-sm mb-2 font-medium text-gray-500">Send another note</p>
                    <form onSubmit={handleSubmit} className="flex flex-col items-end">
                        <textarea
                            value={editedNote}
                            onChange={(e) => setEditedNote(e.target.value)}
                            rows={3}
                            placeholder="Write your note here..."
                            className="p-2 text-sm text-gray-900 border-gray-300 border rounded-lg w-full mb-4"
                        />
                        <button type="submit" className="bg-white text-gray-800 border-gray-300 border-[1px] rounded py-2 px-4 font-medium text-sm hover:bg-gray-100">
                            Send note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderNote;
