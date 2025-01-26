import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { RiHeart3Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFuelPumpFill } from "react-icons/bs";
import { CgPerformance } from "react-icons/cg";
import { IoPeople } from "react-icons/io5";
import Sidebar from "@/components/Sidebar";

const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    price: "99.00",
    image: "/car.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2",
    isFavorite: true,
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    price: "80.00",
    discount: "100.00",
    image: "/car (2).png",
    fuel: "80L",
    transmission: "Manual",
    seats: "2",
    isFavorite: false,
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    price: "96.00",
    image: "/car (3).png",
    fuel: "70L",
    transmission: "Manual",
    seats: "4",
    isFavorite: true,
  },
  {
    name: "All New Rush",
    type: "SUV",
    price: "72.00",
    discount: "80.00",
    image: "/car (5).png",
    fuel: "70L",
    transmission: "Manual",
    seats: "6",
    isFavorite: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    price: "80.00",
    image: "/car (6).png",
    fuel: "80L",
    transmission: "Manual",
    seats: "6",
    isFavorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    price: "74.00",
    image: "/car (7).png",
    fuel: "90L",
    transmission: "Manual",
    seats: "6",
    isFavorite: false,
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    price: "76.00",
    discount: "80.00",
    image: "/car (9).png",
    fuel: "70L",
    transmission: "Electric",
    seats: "4",
    isFavorite: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    price: "80.00",
    image: "/car (10).png",
    fuel: "80L",
    transmission: "Manual",
    seats: "6",
    isFavorite: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    price: "74.00",
    image: "/car (9).png",
    fuel: "90L",
    transmission: "Electric",
    seats: "4",
    isFavorite: true,
  },
];
const CategoriesPage = () => {
  return (
    <div className="bg-gray-100 flex">
      <Sidebar />
      <div className="w-full lg:w-3/4 p-6">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <section className="w-[900px] flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
              <Image alt="" src="/Pickup.png" width={500} height={132} />
              <div className="flex justify-center items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
                  <HiOutlineSwitchVertical className="w-6 h-6" />
                </div>
              </div>
              <Image alt="" src="/Dropoff.png" width={500} height={132} />
            </section>
          </div>
        </div>

        <div className="w-full p-6 flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={index}
                className="w-[250px]  h-[300px] mr-96  border rounded-lg shadow-lg p-6 bg-white flex flex-col items-"
              >
                <div className="flex   mb-4">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <button>
                    {car.isFavorite ? (
                      <RiHeart3Fill className="text-red-500" />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">{car.type}</p>
                <Image
                  src={car.image}
                  alt={`${car.name} - ${car.type}`}
                  width={300}
                  height={128}
                  className="w-full h-32 object-contain mb-4"
                />
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <BsFuelPumpFill className="mr-1" /> {car.fuel}
                  </span>
                  <span className="flex items-center">
                    <CgPerformance className="mr-1" /> {car.transmission}
                  </span>
                  <span className="flex items-center">
                    <IoPeople className="mr-1" /> {car.seats} People
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">${car.price}/day</p>
                    {car.discount && (
                      <p className="text-sm text-gray-500 line-through">
                        ${car.discount}
                      </p>
                    )}
                  </div>
                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-700">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <Link href="/DetailPage">
            <button className="bg-[#3563E9] text-white px-6 py-2 rounded hover:bg-blue-700">
              Show more cars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
