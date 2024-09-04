"use client";

import NoteCard from "@/components/NoteCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Note {
  _id: number;
  title: string;
  content: string;
}

export default function Home() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await fetch("http://localhost:8000/notes");
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const notes = await data.json();
      setNotes(notes);
    };

    fetchNotes();
  }, []);

  const OnUploadClick = () => {
    router.push("/upload");
  };

  return (
    
    <div className="m-3">
      <h1 className="font-kanit text-3xl">NOTIFY</h1>
      <h1 className="font-kanit text-2xl ml-5 mt-10">All Notes</h1>
      <button onClick={OnUploadClick} className="bg-black ml-5 rounded-md text-white p-1 w-20 font-kanit font-light">Create</button>

      <div>
        {notes?.map((note: Note) => (
          <NoteCard key={note._id} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}