import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-100 w-full h-auto flex items-center justify-center">
      <section className="container  mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left Card */}
          <div
            className=" p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/hero(1).png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-2xl  font-bold text-[#FFFFFF] mb-2">
              The Best Platform <br />
              for Car Rental
            </h2>
            <p className="text-[#FFFFFF] text-sm mb-6 ">
              Ease of doing a car rental safely and <br />
              reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 text-[#FFFFFF] px-6 py-2 rounded hover:bg-blue-700">
              Rental Car
            </button>
            <div className="w-[340px] h-[108p] ml-40">
              <Image
                src="/car.png"
                alt="Car"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Card */}

          <div
            className=" p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/hero(2).png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4">
              Easy way to rent a <br />
              car at a low price
            </h2>
            <p className="text-[#FFFFFF] text-sm mb-6">
              Providing cheap car rental services <br />
              and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] text-[#FFFFFF] font-bold px-4 py-2 rounded hover:bg-blue-300">
              Rental Car
            </button>

            <div className="w-[340px] h-[108p] ml-40">
              <Image
                src="/car (2).png"
                alt="Car"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
