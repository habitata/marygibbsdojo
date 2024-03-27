import React from 'react';
import { TfiYoutube } from 'react-icons/tfi';
import { RiYoutubeFill } from 'react-icons/ri';

export default function About() {
  return (
    <>
      <div className='w-1/2 px-6 py-4 text-sm sm:w-full sm:text-base lg:text-lg 2xl:text-2xl'>
        <p className='w-1/2 text-center align-middle sm:w-1/3'>
          The secret art of fist fighting in medieval times encompassed a rich
          tapestry of techniques, strategies, and traditions that were passed
          down through generations of fighters. <br />
          <br />
          While much of this knowledge has been lost to history, glimpses of it
          can still be found in historical texts, artwork, and modern
          interpretations of medieval combat.
        </p>

        <a
          href='https://www.youtube.com/@marygibbs4090'
          className='flex w-1/2 cursor-pointer items-center justify-center  sm:w-1/3'
        >
          <RiYoutubeFill className='hover:text-red-700' size={96} />
        </a>
      </div>
    </>
  );
}
