import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Socials from './../components/Socials';

// images

// links

// COMPONENT

const Header = () => {
  return (
    <div
      className={
        'absolute  w-full flex items-center px-16 xl:px-0 xl:h-[90px] z-20'
      }
    >
      <div className={'container mx-auto'}>
        <div
          className={
            'flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4'
          }
        >
          {/*logo */}
          <Link href={'/'}>
            <Image
              src={'/logo2.svg'}
              alt={'logo2'}
              width={300}
              height={80}
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Header;
