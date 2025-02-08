import React from "react";
import Image from "next/image";
import { HiOutlineSwitchVertical } from "react-icons/hi";

const Hero1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8  bg-gray-100">
      {/* Left Side */}
      <div className="w-[538px] h-[132px] flex items-center justify-between bg-white border rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          <Image
            alt=""
            src="/Pickup.png"
            width={400}
            height={132}
            className="mx-auto lg:mx-0"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
          <HiOutlineSwitchVertical className="w-6 h-6" />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[538px] h-[132px] flex items-center justify-between bg-white border rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          <Image
            alt=""
            src="/Dropoff.png"
            width={400}
            height={132}
            className="mx-auto lg:mx-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
