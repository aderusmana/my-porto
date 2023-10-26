import React from "react";
import { SiSimilarweb } from "react-icons/si";
import { RxPencil2 } from "react-icons/rx";
import { GrTroubleshoot } from "react-icons/gr";
import { MdNetworkWifi } from "react-icons/md";

const serviceData = [
  {
    icon: <SiSimilarweb />,
    title: "Web Developer",
    description:
      "As a web developer, I offer a range of services related to web development, maintenance, and enhancement. I specialize in creating visually appealing and responsive websites while ensuring their security and performance. I am also available to assist clients in redesigning existing websites and ensuring customer satisfaction.",
  },
  {
    icon: <RxPencil2 />,
    title: "Web Design",
    description:
      "As a web designer, I offer a range of design services to create visually stunning and user-friendly websites. My expertise lies in crafting engaging layouts, selecting appealing color schemes, and ensuring an intuitive user experience. I work closely with clients to bring their web design visions to life, aiming for both aesthetics and functionality.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "I offer comprehensive services in the development of attractive, responsive websites that are optimized for search engines (SEO). With a focus on compelling design and robust SEO strategies, I assist clients in enhancing their online visibility and achieving success in the competitive digital landscape..",
  },
  {
    icon: <GrTroubleshoot />,
    title: "Troubleshoot Hardware and Software",
    description:
      "I offer comprehensive services in troubleshooting software and hardware, assisting clients in resolving technical issues, improving system performance, and ensuring smooth operations. With experience in analyzing and fixing various problems, I am ready to be a reliable partner in ensuring clients' systems run optimally.",
  },
  {
    icon: <MdNetworkWifi />,
    title: "Network",
    description:
      "I offer comprehensive networking services to clients, encompassing network setup, configuration, and troubleshooting, to ensure a secure and efficient network infrastructure. With a focus on optimizing performance and addressing connectivity issues, I provide expert solutions for both new and existing networks, supporting clients' digital connectivity needs.",
  },
];
const ServiceSlider = () => {
  return (
    <div>
      <p>ServiceSlider</p>
    </div>
  );
};

export default ServiceSlider;
