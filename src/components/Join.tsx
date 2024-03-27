import React from 'react';
import { RiDiscordFill } from 'react-icons/ri';

export default function Join() {
  return (
    <div className='flex h-[calc(100dvh-6rem)] flex-col items-center justify-center gap-2'>
      <a href='https://discord.gg/2Zp7ptH7'>
        <RiDiscordFill
          size={96}
          className='m-auto rounded-full bg-black p-4 text-white hover:bg-[#5662f6] hover:text-white'
        />
        <p className='mt-2 rounded-sm border-4 border-white bg-black px-4 py-2 text-2xl text-white hover:border-red-700'>
          Join our team
        </p>
      </a>
      <div className='border-4 border-white bg-black'>
        <ul className='flex flex-col flex-wrap px-6 py-4 text-2xl text-white'>
          <p>RULES</p>
          <li>1. You do talk about Fight Club……</li>
          <li>2. You DO talk about Fight Club.</li>
          <li>3. If someone says "Stop" or goes limp — finish him.</li>
          <li>4. Only two guys to a fight.</li>
          <li>5. One fight at a time.</li>
          <li>
            6. No swords, no maces. Fights will go on as long as they have to.
          </li>
        </ul>
      </div>
    </div>
  );
}
