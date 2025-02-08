import Image from "next/image";

export default function userPage() {
  return (
    <div className="bg-gray-100 flex">
      <div className="w-full lg:w-[286px] h-auto lg:h-[900px] pt-2">
        <Image
          src="/Navbar.png"
          alt="Navbar"
          width={286}
          height={900}
          className=""
        />
      </div>
      <div className="w-full lg:w-[500px] h-auto lg:h-[770px] m-8 ml-16 bg-[#FFFFFF] rounded-md shadow-sm ">
        <h2 className="text-lg text-[#1A202C] font-bold p-2 mt-2 ">
          Details Rental
        </h2>

        <div className="relative w-[456px] h-[272px] rounded-lg m-5 overflow-hidden">
          <Image src="/map.png" alt="Map" layout="fill" objectFit="cover" />
        </div>

        <div className="flex items-center gap-4 m-4 mt-4">
          <Image
            src="/Look.png"
            alt="Car"
            width={110}
            height={50}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-lg text-[#1A202C] font-bold">Nissan GT - R</h3>
            <p className="text-[#3D5278] font-medium">Sport Car</p>
          </div>
          <span className="ml-auto text-[#3D5278] text-sm">#9761</span>
        </div>

        <div>
          <div className="text-sm">
            <div className="flex items-center">
              <Image
                alt=""
                src="/Pickup.png"
                width={486}
                height={132}
                className="mx-auto lg:mx-0"
              />

              <div className="grid grid-cols-3 gap-2 mt-2"></div>
            </div>
          </div>

          <div className="text-sm">
            <div className="flex items-center">
              <Image
                alt=""
                src="/Dropoff.png"
                width={486}
                height={132}
                className="mx-auto lg:mx-0 "
              />
            </div>
          </div>
        </div>

        <div className="mt- border-t pt-4">
          <h1 className="text-[#1A202C] font-bold ml-3">Total Rental Price</h1>

          <p className="text-[#90A3BF] text-sm ml-3">
            Overall price and includes rental discount
          </p>
          <p className="text-xl text-[#1A202C] font-bold pl-96 pb-6 ">$80.00</p>
        </div>
      </div>
      <div className="w-full lg:w-[530px] h-auto lg:h-[770px] m-8 ml-2 mb-6 bg-[#FFFFFF] rounded-md shadow-sm">
        <Image src="/Top 5 Cars.png" alt="Topcars" width={524} height={300} />

        <Image
          src="/Recent Transaction.png"
          alt="Transaction"
          width={524}
          height={480}
        />
      </div>
    </div>
  );
}
