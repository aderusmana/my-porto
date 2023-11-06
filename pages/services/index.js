import React from 'react';
//framer motion
import { motion } from 'framer-motion';

//components
import Circles from './../../components/Circles';
import Bulb from './../../components/Bulb';
import ServiceSlider from './../../components/ServiceSlider';
import { fadeIn } from '/variants';

const Services = () => {
  return (
    <div className={'h-full bg-primary/30 py-36 flex items-center mt-10'}>
      <Circles />
      <div className={'container mx-auto'}>
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div
            className={
              'text-center flex xl:w-[40vw] flex-col lg:text-left mb-4 ' +
              'xl:mb-0'
            }
          >
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className={'h2 xl:mt-8'}
            >
              My
              <span className={'text-accent'}> Services .</span>
            </motion.h2>
            <p className={'mb-4 max-w-[400px] mx-auto lg:mx-0'}>
              Im a dedicated professional committed to delivering high-quality
              solutions to meet your needs. With a focus on innovation and a
              results-driven approach, I turn your vision into reality while
              ensuring top-notch quality in every service.
            </p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'w-full xl:max-w-[65%]'}
          >
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
