import React from 'react';
import {Sora} from "@next/font/google";

//component
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  wights: ['100','200','300','400','500','600','700','800','900']
})

const Layout = ({ children}) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
