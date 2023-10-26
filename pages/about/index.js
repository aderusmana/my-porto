import React from "react";
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
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const aboutData = {
  title: "skills",
  info: [
    {
      title: "Web Developer",
      icons: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaVuejs />,
        <FaLaravel />,
        <SiCodeigniter />,
        <FaDocker />,
        <FaReact />,
        <FaWordpress />,
        <SiMysql />,
        <SiPostgresql />,
      ],
    },
    {
      title: "UI/UX Design",
      icons: [
        <FaFigma />,
        <SiAdobephotoshop />,
        <FaBootstrap />,
        <SiTailwindcss />,
      ],
    },
    {
      title: "Video Editor",
      icons: [<SiAdobepremierepro />],
    },
    {
      title: "exprerience",
      info: [
        {
          title:
            "Web Developer  - PT.Mobilogix Teknologi Indonesia , South Tangerang, Indonesia",
          stage: "2021 - 2022",
        },
        {
          title: "IT STAFF  - Perpustakaan Nasional , Jakarta, Indonesia",
          stage: "2019 - 2020",
        },
        {
          title:
            "ADMINISTRATIVE STAFF / SUPERVISOR  - Badan Pusat Statistik (Partner), Jakarta, Indonesia",
          stage: "2016 - 2019",
        },
      ],
    },
    {
      title: "education",
      info: [
        {
          title:
            "BACHELOR OF COMPUTER SCIENCE & INFORMATION SYSTEMS - Nusa Mandiri University, Jakarta, Indonesia",
          stage: "2021 - 2022",
          ipk: "3.88",
        },
        {
          title:
            "ASSOCIATES OF COMPUTER SCIENCE & INFORMATION SYSTEMS - NBina Sarana Informatika University, Jakarta, Indonesia",
          stage: "2017 - 2020",
          ipk: "3.83",
        },
      ],
    },
  ],
};
const About = () => {
  return <div>About</div>;
};

export default About;
