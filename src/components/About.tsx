import React from 'react';
import { TfiYoutube } from 'react-icons/tfi';

export default function About() {
  return (
    <>
      <div className='w-1/2 px-6 py-4 text-2xl sm:w-1/3'>
        <p className='w-[30rem] text-center align-middle'>
          The secret art of fist fighting in medieval times encompassed a rich
          tapestry of techniques, strategies, and traditions that were passed
          down through generations of fighters. While much of this knowledge has
          been lost to history, glimpses of it can still be found in historical
          texts, artwork, and modern interpretations of medieval combat.
        </p>
        <p className='flex w-[30rem] flex-col items-center justify-center pt-4 text-red-700'>
          Watch on
          <a
            href='https://www.youtube.com/@marygibbs4090'
            className='cursor-pointer text-black hover:text-red-700'
          >
            <TfiYoutube size={48} />
          </a>
        </p>
      </div>
    </>
  );
}
