import React from 'react';
//import swipper

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
      'As a web developer, I offer a range of services related to web development, maintenance, and enhancement. I specialize in creating visually appealing and responsive websites while ensuring their security and performance. I am also available to assist clients in redesigning existing websites and ensuring customer satisfaction.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Web Design',
    description:
      'As a web designer, I offer a range of design services to create visually stunning and user-friendly websites. My expertise lies in crafting engaging layouts, selecting appealing color schemes, and ensuring an intuitive user experience. I work closely with clients to bring their web design visions to life, aiming for both aesthetics and functionality.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'I offer comprehensive services in the development of attractive, responsive websites that are optimized for search engines (SEO). With a focus on compelling design and robust SEO strategies, I assist clients in enhancing their online visibility and achieving success in the competitive digital landscape..',
  },
  {
    icon: <FaScrewdriverWrench />,
    title: 'Troubleshooting',
    description:
      "I offer comprehensive services in troubleshooting software and hardware, assisting clients in resolving technical issues, improving system performance, and ensuring smooth operations. With experience in analyzing and fixing various problems, I am ready to be a reliable partner in ensuring clients' systems run optimally.",
  },
  {
    icon: <MdNetworkWifi />,
    title: 'Network',
    description:
      "I offer comprehensive networking services to clients, encompassing network setup, configuration, and troubleshooting, to ensure a secure and efficient network infrastructure. With a focus on optimizing performance and addressing connectivity issues, I provide expert solutions for both new and existing networks, supporting clients' digital connectivity needs.",
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
      className={'h-[240px] sm:h-[320px]'}
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
                <p className={'max-w-[400px] '}>{item.description}</p>
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
