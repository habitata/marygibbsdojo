import { tw } from '../utils/tw';

/* eslint-disable react/prop-types */
export default function NavItem({
  isActive,
  onClick,
  navName,
  bgUrl,
  children,
}) {
  const navStyle = tw`cursor-pointer border-y-2 p-6 text-center font-custom text-3xl text-white hover:bg-red-700`;
  const bgStyle = tw`bg-[image:var(--background-image-url)] bg-cover bg-center bg-no-repeat`;
  const dynamicWidth = isActive
    ? 'w-3/4'
    : 'w-1/3 brightness-50 hover:brightness-100';

  return (
    <div
      className={tw`flex h-full flex-col ${bgStyle} transition-width duration-500 ease-in-out ${dynamicWidth}`}
      style={{ '--background-image-url': `url(${bgUrl})` }}
    >
      {isActive ? (
        <div className='scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-black relative flex-1 overflow-auto'>
          {children}
        </div>
      ) : (
        <div className='flex-1' />
      )}
      <p
        className={`${navStyle} ${isActive ? 'bg-red-700' : 'bg-black'}`}
        onClick={onClick}
      >
        {navName}{' '}
        {isActive ? (
          <span className='font-mono'>&lt;</span>
        ) : (
          <span className='font-mono'>&gt;</span>
        )}
      </p>
    </div>
  );
}
