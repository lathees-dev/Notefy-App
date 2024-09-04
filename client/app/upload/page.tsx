"use client";

import React from "react";

const Upload = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
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
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col w-1/2 m-auto mt-20">
        <h1 className="font-black font-kanit text-3xl text-center my-8">Capture Your Ideas!</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border-gray-400
          border-solid
          border-2 mb-2 p-2 rounded-sm"
        />
        <textarea
          placeholder="Content"
          name="content"
          required
          className="border-gray-400
          border-solid
          border-2 mb-2 p-2 rounded-sm"
        />
        <input
          type="submit"
          value="Upload"
          className=" mb-2 bg-slate-800 text-white w-[6rem] px-2 py-2 rounded-md mx-auto cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Upload;