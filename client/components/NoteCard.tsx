import React from 'react';
interface Note{
    title: string;
    content: string;
}

const NoteCard = (props:Note) => {
  return (
    <div className='my-4 mx-6 bg-gray-700 w-64 h-40 text-white p-6 rounded-md scale-100 hover:scale-110 transition-all duration-200 ease-out cursor-pointer'>
      <h1 className='font-bold text-2xl'>{props.title}</h1>
      <p className='font-light text-sm'>{props.content}</p>
    </div>
  )
}

export default NoteCard;
