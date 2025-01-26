import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { RiHeart3Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { CgPerformance } from "react-icons/cg";
import { BsFuelPumpFill } from "react-icons/bs";
const Detailpage = () => {
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
    <div>
      <div className="bg-gray-100 flex">
        <Sidebar />

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
      </div>
    </div>
  );
};

export default Detailpage;
