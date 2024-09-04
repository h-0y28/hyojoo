// src/pages/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import MyProfile from "../imgs/다운로드.png";
// import MyCard from "../imgs/명함-베이지.png";
import callIcon from "../imgs/call.png";
import githubIcon from "../imgs/github.png";
import instagramIcon from "../imgs/instagram.png";
import mailIcon from "../imgs/mail.png";
// import mailIcon2 from "../imgs/mail2.png";

const Main: React.FC = () => {
  const githubLink = () => {
    window.location.href = "https://github.com/h-0y28";
  };
  const instagramLink = () => {
    window.location.href = "https://www.instagram.com/h_0y.28/";
  };

  return (
    <div className="w-full h-screen bg-[#f6f1ea] font-roboto-slab">
      <motion.main
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-10 w-[90%] flex items-center">
          <hr className="border-black border-[1.5px] rounded-r-full flex-grow" />
          <p className="font-normal text-[6rem] w-fit ml-10">GSM</p>
        </div>
        <div className="flex px-56 gap-[20rem] pt-16">
          <div className="">
            <p className="text-[6rem] font-hahmlet ">정효주</p>
            <p className="text-[2.5rem] pl-1 pt-3">Front End</p>
            <p className="text-lg text-gray-500 pl-1 pt-3">React, JS, TS</p>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex">
              <img src={callIcon} alt="callIcon" className="w-8" />
              <p className="ml-3">010-5496-1458</p>
            </div>
            <div onClick={githubLink} className="flex cursor-pointer">
              <img src={githubIcon} alt="githubIcon" className="w-8" />
              <p className="ml-3">h-0y28</p>
            </div>
            <div onClick={instagramLink} className="flex cursor-pointer">
              <img src={instagramIcon} alt="instargramIcon" className="w-8" />
              <p className="ml-3">h_0y.28</p>
            </div>
            <div className="flex">
              <img src={mailIcon} alt="mailIcon" className="w-8" />
              <p className="ml-3">s24015@gsm.hs.kr</p>
            </div>
          </div>
        </div>

        {/* <img src={MyProfile} alt="profile" className="p-10" /> */}
      </motion.main>
    </div>
  );
};

export default Main;
