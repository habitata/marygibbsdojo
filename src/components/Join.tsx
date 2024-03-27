import React from 'react';
import { RiDiscordFill } from 'react-icons/ri';

export default function Join() {
  return (
    <div className='flex h-[calc(100vh-6rem)] items-center justify-center'>
      <a
        href='https://discord.gg/2Zp7ptH7'
        className='flex flex-col items-center justify-center gap-2'
      >
        <RiDiscordFill
          size={96}
          className='rounded-full bg-black p-4 text-white hover:bg-[#5662f6] hover:text-white'
        />
        <p className='rounded-sm border-4 border-white bg-black px-4 py-2 text-xl text-white hover:border-red-700'>
          Join our team
        </p>
      </a>
    </div>
  );
}
