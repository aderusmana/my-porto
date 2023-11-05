import React, { useRef, useState } from 'react';
import ProjectCard from 'components/ProjectCard';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from 'variants';
import Bulb from 'components/Bulb';
import Circles from 'components/Circles';

const projectData = [
  {
    id: 1,
    title: 'Rental Motor Website - SIREMOT',
    description: 'Website Rental Motor dibangun dengan CI3',
    image: '/project/rental1.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 2,
    title: 'NontonDong Website',
    description:
      'Website Imdb Movie dibangun dengan Monggo,Express, React,NodeJs',
    image: '/project/nonton1.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 3,
    title: 'Listrik Payment Website',
    description: 'Website Pembayaran Listrik dibangun dengan CI3',
    image: '/project/listrik-app1.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 4,
    title: 'Inventory Website',
    description: 'Website Inventory Barang dibangun dengan Laravel + ajax',
    image: '/project/inventory1.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 5,
    title: 'Penggajian Website',
    description: 'Website Penggajian dibangun dengan CI3',
    image: '/project/penggajian1.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 6,
    title: 'AbsensiGPS Website',
    description: 'Website Absensi + GPS + Webcam dibangun dengan Laravel',
    image: '/project/absensi-web.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 7,
    title: 'Google Drive Clone',
    description: 'Website Clone Google Drive dibangun dengan Laravel dan Vue',
    image: '/project/gdrive-clone.png',
    tags: ['All', 'Web'],
    gitUrl: '/',
    previewgUrl: '/',
  },
  {
    id: 8,
    title: 'GitHub App',
    description: 'Aplikasi Android Github dibangun dengan Kotlin',
    image: '/project/github-app.png',
    tags: ['All', 'Mobile'],
    gitUrl: '/',
    previewgUrl: '/',
  },
];
const Work = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tags.includes(tag),
  );

  return (
    <div className="bg-primary/60 mt-5 max-h-screen  overflow-y-auto">
      <Circles />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center  container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className="h1 text-white  text-2xl sm:text-4xl lg:text-6xl  font-extrabold"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '30vh', // Menyusuaikan tinggi layar
            }}
          >
            My
            <span className={'text-accent ml-2'}> Work .</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className="flex justify-center gap-4 mt-4 mb-5 z-20"
          >
            <button
              className={`${
                tag === 'All' ? 'bg-accent text-white' : 'bg-primary text-white'
              } px-3 py-2 rounded-md`}
              onClick={() => handleTagChange('All')}
            >
              All
            </button>
            <button
              className={`${
                tag === 'Web' ? 'bg-accent text-white' : 'bg-primary text-white'
              } px-3 py-2 rounded-md`}
              onClick={() => handleTagChange('Web')}
            >
              Web
            </button>
            <button
              className={`${
                tag === 'Mobile'
                  ? 'bg-accent text-white'
                  : 'bg-primary text-white'
              } px-3 py-2 rounded-md`}
              onClick={() => handleTagChange('Mobile')}
            >
              Mobile
            </button>
          </motion.p>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={
              'grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 z-20 mb-10'
            }
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
