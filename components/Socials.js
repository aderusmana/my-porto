import React from 'react';

//links
import Link from 'next/link';
//icons
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';
const Socials = () => {
  return (
    <div className={'flex items-center gap-x-5 text-lg'}>
      <Link
        href={'/youtube'}
        className={'hover:text-accent transition-all duration-300'}
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'/youtube'}
        className={'hover:text-accent transition-all duration-300'}
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'/youtube'}
        className={'hover:text-accent transition-all duration-300'}
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
