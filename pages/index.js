import React from 'react';

//components

//framer motion
import { motion } from 'framer-motion';
import ProjectBtn from '@/components/ProjectBtn';
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">
            Transforming ideas <br /> Intro{' '}
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitile */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat
            inventore provident ullam voluptatibus.
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
        </div>
      </div>
      {/* images */}
      <div>image</div>
    </div>
  );
};

export default Home;
