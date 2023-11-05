import React from 'react';
//import swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

//icons
import { SiSimilarweb } from 'react-icons/si';
import { RxArrowTopRight, RxPencil2, RxRocket } from 'react-icons/rx';
import { MdNetworkWifi } from 'react-icons/md';
import { FreeMode } from 'swiper/modules';
import { FaScrewdriverWrench } from 'react-icons/fa6';

const serviceData = [
  {
    icon: <SiSimilarweb />,
    title: 'Web Developer',
    description:
      'Specializing in web development with a strong focus on security, performance, and customer satisfaction. Offering website creation and redesign services.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Web Design',
    description:
      'Crafting visually stunning and user-friendly websites with captivating layouts and intuitive user experiences that captivate visitors.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Optimizing websites for search engines with compelling design and robust SEO strategies to significantly enhance online visibility and boost organic traffic..',
  },
  {
    icon: <FaScrewdriverWrench />,
    title: 'Troubleshooting',
    description:
      'Comprehensive troubleshooting services for resolving technical issues, improving system performance, and ensuring smooth operations.',
  },
  {
    icon: <MdNetworkWifi />,
    title: 'Network',
    description:
      'Providing network setup, configuration, and troubleshooting services to optimize performance and resolve connectivity issues.',
  },
];

//required modules

const ServiceSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      modules={[FreeMode]}
      className={'h-[300px] sm:h-[400px] w-[800px]'}
    >
      {serviceData.map((item, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className=" bg-[rgba(65,47,123,0.15)] rounded-lg p-6 flex flex-col gap-4 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className={'text-4xl text-accent mb-4'}>{item.icon}</div>
              {/*title & description */}
              <div className={'mb-8'}>
                <div className={'text-lg font-bold'}>{item.title}</div>
                <p className={'max-w-[500px] '}>{item.description}</p>
              </div>
              {/* arrow */}
              <div className={'text-3xl'}>
                <RxArrowTopRight
                  className={
                    'group-hover:rotate-45 group-hover:text-accent transition-all ' +
                    'duration-300'
                  }
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
