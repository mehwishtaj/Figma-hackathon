import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoPeople } from "react-icons/io5";
import { RiHeart3Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";
import { BsFuelPumpFill } from "react-icons/bs";

const detailPage = () => {
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
  ];

  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar />
      {/* views section */}

      <div className="w-full lg:w-3/5 p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="w-[px]    lg:col-span-2">
            <div
              className="p-6 rounded-lg shadow-md bg-cover bg-center"
              style={{ backgroundImage: "url('/hero(2).png')" }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Sports car with the best <br /> design and acceleration
              </h2>
              <p className="text-white text-sm mb-6">
                Safety and comfort while driving a <br /> futuristic and elegant
                sports car
              </p>
              <div className="w-full max-w-md mx-auto">
                <Image
                  src="/car (2).png"
                  alt="Car"
                  width={380}
                  height={120}
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* View Images */}
            <div className="mt-6 flex gap-4">
              <Image
                alt="View 1"
                src="/View 1.png"
                width={148}
                height={124}
                className="rounded-lg shadow-md"
              />
              <Image
                alt="View 2"
                src="/View 2.png"
                width={148}
                height={124}
                className="rounded-lg shadow-md"
              />
              <Image
                alt="View 3"
                src="/View 3.png"
                width={148}
                height={124}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Detail Section */}
          <div className="w-[410px] bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Nissan GT – R</h2>
              <button className="text-red-500">
                <IoHeart className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center mb-12">
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: 4 }, (_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-gray-300">★</span>
              </div>
              <span className="text-sm text-[#596780]  ml-2">
                440+ Reviewer
              </span>
            </div>
            <p className="text-[#596780] font-Plus Jakarta Sans text-sm mb-8">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-[#596780] font-bold mb-4 ">
              <div>
                <span className="font-Plus Jakarta Sans text-[#90A3BF]">
                  Type Car:
                </span>{" "}
                Sport
              </div>
              <div>
                <span className="font-Plus Jakarta Sans text-[#90A3BF]">
                  Capacity
                </span>
                : 2 Person
              </div>
              <div>
                <span className="font-Plus Jakarta Sans text-[#90A3BF]">
                  Steering
                </span>
                : Manual
              </div>
              <div>
                <span className="font-Plus Jakarta Sans text-[#90A3BF]">
                  Gasoline
                </span>
                : 70L
              </div>
            </div>
            <div className="flex justify-between items-center mt-20">
              <div>
                <p className="text- font-bold text-black">$80.00/days</p>
                <p className="line-through text-[#90A3BF] text-sm">$100.00</p>
              </div>
              <Link href="/paymentPage">
                <button className="bg-blue-600 text-white px-4 py-2.5 rounded-md hover:bg-blue-700">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[900px] h-[400px]">
            <Image
              alt="Car"
              src="/Reviews.png"
              width={1000}
              height={300}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Recent Cars */}

        <h2 className="text-2xl font-bold text-[#90A3BF]">Recent Car</h2>
        <div className="w-[900px] h-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={index}
                className="w-[250px] h-[300px] border rounded-lg shadow-lg p-4 bg-white flex flex-col"
              >
                <div className="flex justify-between mb-4">
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
                  <Link href="/paymentPage">
                    <button className="bg-blue-600 text-white px-4 py-2.5 rounded-md hover:bg-blue-700">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailPage;
