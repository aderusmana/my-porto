import React from 'react';

//links
import Link from 'next/link';
//icons
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';
const Socials = () => {
  return (
    <div className={'flex items-center gap-x-5 text-lg'}>
      <Link
        href={'https://www.instagram.com/aderusmana22/?hl=id/'}
        className={'hover:text-accent transition-all duration-300'}
        target={'_blank'}
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/ade-rusmana/'}
        className={'hover:text-accent transition-all duration-300'}
        target={'_blank'}
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://github.com/aderusmana?tab=repositories'}
        className={'hover:text-accent transition-all duration-300 '}
        target={'_blank'}
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
