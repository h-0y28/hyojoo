// src/pages/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import MyProfile from "../imgs/다운로드.png";
// import MyCard from "../imgs/명함-베이지.png";

const Main: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#f6f1ea] font-roboto-slab">
      <motion.main
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-20 w-[90%] flex items-center">
          <hr className="border-black border-[1.5px] rounded-r-full flex-grow" />
          <p className="font-normal text-[6rem] w-fit ml-10">GSM</p>
        </div>
        <div className="flex px-10">
          <div className="">
            <p className=" text-[5rem] font-hahmlet ">정효주</p>
            <p>Front End</p>
            <p>react, JS, TS</p>
          </div>
          <div>
            <p>imformation</p>
          </div>
        </div>

        <img src={MyProfile} alt="profile" className="p-10" />
      </motion.main>
    </div>
  );
};

export default Main;
