import React, { useState } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';
import Circles from './../../components/Circles';
import Avatar from './../../components/Avatar';

import { motion } from 'framer-motion';
import { fadeIn } from '/variants';

import CountUp from 'react-countup';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        id: 1,
        title: 'Web Developer',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaVuejs key="vuejs" />,
          <FaLaravel key="laravel" />,
          <SiCodeigniter key="codeigniter" />,
          <FaDocker key="docker" />,
          <FaReact key="react" />,
          <FaWordpress key="wordpress" />,
          <SiMysql key="mysql" />,
          <SiPostgresql key="postgresql" />,
        ],
      },
      {
        id: 2,
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />,
          <SiAdobephotoshop key="photoshop" />,
          <FaBootstrap key="bootstrap" />,
          <SiTailwindcss key="tailwindcss" />,
        ],
      },
      {
        id: 3,
        title: 'Video Editor',
        icons: [<SiAdobepremierepro key="adobepremierepro" />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        id: 1,
        title:
          'Web Developer  - PT.Mobilogix Teknologi Indonesia, South Tangerang,  Indonesia',
        stage: '2021 - 2022',
      },
      {
        id: 2,
        title: 'It Staff  - Perpustakaan Nasional ,Jakarta,  Indonesia',
        stage: '2019 - 2020',
      },
      {
        id: 3,
        title:
          'Administrative Staff - Badan Pusat Statistik (Partner), Jakarta, Indonesia',
        stage: '2016 - 2019',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        id: 1,
        title:
          'Bachelor of information System - Nusa Mandiri University, Jakarta, Indonesia',
        stage: '2021 - 2022',
        ipk: '3.88',
      },
      {
        id: 2,
        title:
          'Associates of Information System - Bina Sarana Informatika University, Jakarta, Indonesia',
        stage: '2017 - 2020',
        ipk: '3.83',
      },
    ],
  },
];
const About = () => {
  const [index, setIndex] = useState(0);
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };
  const text = `I am a web developer with 2 years of formal company and 3 years of freelance experience. My expertise lies in web application development, particularly using PHP with a focus on the Laravel framework, and I possess strong skills in managing both MySQL and PostgresSQL databases. Proficient in UI design using Bootstrap and Tailwind CSS, and experienced in the efficient use of tools like Docker and Git, I am adaptable to various operating systems, including Windows and Linux, and I am prepared to help you reach your web project goals.`;

  return (
    <div
      className={
        'max-h-screen  overflow-y-auto bg-primary/30 py-40 text-center xl:text-left'
      }
    >
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        animate={'show'}
        exit={'hidden'}
        className={
          'hidden xl:flex  absolute bottom-0 -left-[260px] md:max-h-[800px] '
        }
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6"
      >
        {/* text */}
        <div className={'flex-1 z-10 flex flex-col justify-center'}>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'h2'}
          >
            Hard Work <span className={'text-accent'}>stories as </span>
            Web Developer.
          </motion.h2>
          {isFullTextVisible ? (
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className={
                'max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 leading-2'
              }
            >
              {text}
              <button
                onClick={toggleFullText}
                className="bg-accent text-white px-1 py-0.5 rounded-full text-sm"
              >
                Read Less
              </button>
            </motion.p>
          ) : (
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className={
                'max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 leading-2 justify-center'
              }
            >
              {`${text.slice(0, 150)}...`}
              <button
                onClick={toggleFullText}
                className="bg-accent text-white px-1 py-0.5 rounded-full text-sm"
              >
                Read More
              </button>
            </motion.p>
          )}
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={
              ' md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            }
          >
            <div className={'flex flex-1 xl:gap-4'}>
              {/* experience */}
              <div
                className={
                  'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
                }
              >
                <div
                  className={
                    'text-2xl xl:text-4xl font-extrabold text-accent mb-2'
                  }
                >
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div
                  className={
                    'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '
                  }
                >
                  Years of Experience
                </div>
              </div>

              {/* Project */}
              <div
                className={
                  'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
                }
              >
                <div
                  className={
                    'text-2xl xl:text-4xl font-extrabold text-accent mb-2'
                  }
                >
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div
                  className={
                    'text-xs uppercase tracking-[1px] leading-[1.4] max-w--[100px] '
                  }
                >
                  Finished Project
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className={'flex flex-col w-full xl:max-w-[65%] h-[480px]'}
        >
          <div className={'flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'}>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }
                  cursor-pointer capitalize text-sm xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {' '}
                  {item.title}
                </div>
              );
            })}
          </div>

          <div
            className={
              'py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '
            }
          >
            {aboutData[index].info.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    'flex-1 flex flex-col md:flex-row max-w-max gap-x-1 items-center text-white/60'
                  }
                >
                  {/* title */}
                  <div className={'font-light mb-2 md:mb-0 w-[75%]'}>
                    {item.title} {item.ipk && `- GPA ${item.ipk}`}
                  </div>
                  <div className={'hidden'}>-</div>
                  <div className="flex ">{item.stage}</div>

                  <div className={'flex gap-x-4 '}>
                    {/* icons */}
                    {item.icons?.map((icon, i) => {
                      return (
                        <div
                          key={i}
                          className={
                            'text-2xl md:text-3xl lg:text-4xl text-white'
                          }
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
