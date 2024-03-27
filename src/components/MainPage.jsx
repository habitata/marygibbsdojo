import { useState } from 'react';
import NavItem from './NavItem';
import Techniques from './Techniques';
import Rules from './Rules';
import About from './About';
import Join from './Join';

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
    <div className='flex h-full'>
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
  );
}
