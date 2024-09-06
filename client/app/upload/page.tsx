"use client";

import React from "react";
import { useRouter } from "next/navigation";
// importrouter, { useRouter } from "next/router";

const Upload = () => {
  const router = useRouter();
  
  const onSubmit = async (e: any) => {
      e.preventDefault();
      router.push('/');
      await fetch("http://localhost:8000/notes/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: e.target.title.value,
          content: e.target.content.value,
        }),
      })
        .then((res) => res.json())
        .then(() => alert("Note uploaded successfully!"))
        .then((data) => console.log(data)) 
    };
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col w-1/2 m-auto mt-20">
        <h1 className="font-black font-kanit text-3xl text-center my-8">Capture Your Ideas!</h1>
        <label className="font-black font-kanit text-md font-normal" >Title:</label>
        <input
          type="text"
          name="title"
          placeholder=""
          required
          className="border-gray-400
          border-solid
          border-2 mb-2 p-2 rounded-md"
        />
        <label className="font-black font-kanit text-md font-normal" >Content:</label>
        <textarea
          placeholder=""
          name="content"
          required
          className="border-gray-400
          border-solid
          border-2 mb-2 p-2 rounded-md"
        />
        <input
          type="submit"
          value="Upload"
          className=" mb-2 bg-slate-800 text-white w-[6rem] px-2 py-2 mx-auto cursor-pointer rounded-md"
        />
      </form>
    </div>
  );
};

export default Upload;