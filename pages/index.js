import React from 'react';

//components
import ProjectBtn from './../components/ProjectBtn';
//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from 'variants';
//avatar
import Avatar from './../components/Avatar';
//particles
import ParticlesContainer from './../components/ParticlesContainer';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className="h1 text-white mb-4 text-2xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold"
          >
            Hello, I&apos;m Ade Rusmana <br />
            <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent  to-blue-500">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'Video Editor',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white text-xl"
          >
            Thank You for Coming! Check Out My Portfolio.
          </motion.p>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'mb-5 z-20'}
          >
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-red-700 to-blue-500 hover:bg-accent text-white cursor-pointer"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/uc?export=download&id=1mUoyfBeFyT-Dlme18aINgn7t5FYsCc7X"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-red-700 to-blue-500 hover:bg-slate-800 text-white mt-3 cursor-pointer"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </motion.div>

          {/* btn */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className="flex justify-center xl:hidden relative z-20"
          >
            <ProjectBtn />
          </motion.div>
          <motion.div
            className="hidden xl:flex "
            variants={fadeIn('down', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      {/* images */}
      <motion.div className={'w-[1200px] h-full absolute right-0 bottom-0'}>
        {/* bg img */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className={
            'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full ' +
            'absolute mix-blend-color-dodge translate-z-0'
          }
        ></motion.div>
        {/* pasrticles */}
        <div>
          <ParticlesContainer />
        </div>
        {/* avatars */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          transition={{ current: 1, ease: 'easeInOut' }}
          className={
            'w-full h-full max-w-[750px] max-h-[800px] px-10 absolute -bottom-32 lg:bottom-0 mix-blend-normal ' +
            'lg:right-[0%]'
          }
        >
          <Avatar />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
