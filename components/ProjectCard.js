import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiFillEye } from 'react-icons/ai';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleSwiperOpen = () => {
    setModalOpen(true);
  };

  const handleSwiperClose = () => {
    setModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className="h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiOutlineCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={handleSwiperOpen}
          >
            <AiFillEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      {/* Modal */}
      {modalOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50 "
          onClick={handleSwiperClose}
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
        >
          <div
            className="bg-gradient-to-r from-purple-900 to-blue-800 p-4 rounded-md max-w-screen-lg"
            ref={modalRef}
          >
            <Swiper
              effect={'coverflow'}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
            >
              {previewUrl.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: 'auto',
                      height: '500px',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
              <p className={'text-white text-sm '}>{description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
