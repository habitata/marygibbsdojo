import { useState } from 'react';
import NavItem from './NavItem';
import Techniques from './Techniques';
import Rules from './Rules';
import About from './About';
import Join from './Join';
import { RiYoutubeFill } from 'react-icons/ri';

export default function MainPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const navEls = [
    {
      index: 1,
      name: 'About',
      bgUrl: './img/bg_1.png',
      children: <About />,
    },
    {
      index: 2,
      name: 'Techniques',
      bgUrl: './img/bg_4.png',
      children: <Techniques />,
    },
    // {
    //   index: 3,
    //   name: 'Rules',
    //   bgUrl: './assets/img/bg_5.png',
    //   children: <Rules />,
    // },
    {
      index: 4,
      name: 'Join Dojo',
      bgUrl: './img/bg_2.png',
      children: <Join />,
    },
  ];

  return (
    <>
      <div className='hidden sm:flex sm:h-full'>
        {navEls.map((item) => (
          <NavItem
            key={item.index}
            isActive={activeIndex === item.index}
            onClick={() => handleClick(item.index)}
            bgUrl={item.bgUrl}
            navName={item.name}
          >
            <div>{item.children}</div>
          </NavItem>
        ))}
      </div>
      <div className='sm:hidden'>
        <p className='flex h-12 items-center justify-center gap-2 bg-black text-2xl text-white'>
          Mary Gibbs presents{' '}
          <a href='https://www.youtube.com/@marygibbs4090'>
            <RiYoutubeFill className='hover:text-red-700' size={32} />
          </a>
        </p>
        {/* <div className='fixed top-20 pl-60'>
          <p>
            The secret art of fist fighting in medieval times encompassed a rich
            tapestry of techniques, strategies, and traditions that were passed
            down through generations of fighters.
          </p>
          <br />
          <p>
            While much of this knowledge has been lost to history, glimpses of
            it can still be found in historical texts, artwork, and modern
            interpretations of medieval combat.
          </p>
          <a href='https://www.youtube.com/@marygibbs4090'>
            <RiYoutubeFill className='mt-2 hover:text-red-700' size={64} />
          </a>
        </div> */}
      </div>
      <div className="bg-[url('./img/bg_1.png')] bg-cover bg-right px-4">
        <Join />
      </div>

      <p className='h-12 bg-black pl-2 pt-3 text-slate-900'>
        Place for granny pron
      </p>
    </>
  );
}
