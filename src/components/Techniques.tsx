import React from 'react';

export default function Techniques() {
  return (
    <div className='flex flex-col items-center gap-4 p-4'>
      <video
        className='rounded-lg'
        src='/videos/MorphsGuide.mp4'
        controls
      ></video>
      <video
        className='rounded-lg'
        src='/videos/DodgesGuide.mp4'
        controls
      ></video>
      <video
        className='rounded-lg'
        src='/videos/Dodge_part2.mp4'
        controls
      ></video>
      <video
        className='rounded-lg'
        src='/videos/BufferGuide.mp4'
        controls
      ></video>
    </div>
  );
}
