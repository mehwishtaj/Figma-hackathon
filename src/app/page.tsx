import React from "react";
import Link from "next/link";
import { RiHeart3Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { CgPerformance } from "react-icons/cg";
import { BsFuelPumpFill } from "react-icons/bs";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";

const Home = () => {
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
      type: "Sedan",
      price: "96.00",
      image: "/car (3).png",
      fuel: "70L",
      transmission: "Manual",
      seats: "4",
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
  ];

  const recommendations = [
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
      name: "CR  - V",
      type: "SUV",
      price: "80.00",
      image: "/car (8).png",
      fuel: "80L",
      transmission: "Manual",
      seats: "6",
      isFavorite: true,
    },
    {
      name: "MG ZX Exclusice",
      type: "Hatchback",
      price: "76.00",
      discount: "80.00",
      image: "/car (9).png",
      fuel: "70L",
      transmission: "Manual",
      seats: "6",
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
      name: "MG ZX Exclusice",
      type: "Hatchback",
      price: "76.00",
      image: "/car (9).png",
      fuel: "70L",
      transmission: "Manual",
      seats: "6",
      isFavorite: true,
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "80.00",
      image: "/car (11).png",
      fuel: "80L",
      transmission: "Manual",
      seats: "6",
      isFavorite: false,
    },
  ];

  return (
    <div>
      <Hero />
       <Hero1 /> 
      <div className="bg-gray-100 text-[#90A3BF] min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Popular Cars Section */}
          <Section title="Popular Cars" link="View All">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </Section>

          {/* Recommended Cars Section */}

          <h2 className="text-xl font-bold mb-6 ">Recomendation Car</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
          {/* Show More Button */}
          <section className="w-full py-8 text-center">
            <Link href="/categoriesPage">
              <button className="bg-[#3563E0] hover:bg-blue-700 transition-colors px-6 py-3  text-white rounded-md mt-8">
                Show more cars
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, link, children }) => (
  <div className="mb-12">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {link && (
        <a href="id" className="text-blue-500 text-sm">
          {link}
        </a>
      )}
    </div>
    {children}
  </div>
);

const CarCard = ({ car }) => (
  <div className="bg-white text-black rounded-lg shadow-md p-4">
    <div className="flex justify-between items-center mb-4">
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
    <img
      src={car.image}
      alt={`${car.name} - ${car.type}`}
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
          <p className="text-sm text-gray-500 line-through">${car.discount}</p>
        )}
      </div>
      <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-700">
        Rent Now
      </button>
    </div>
  </div>
);

export default Home;
