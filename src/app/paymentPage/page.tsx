import React from "react";
import Image from "next/image";
import Link from "next/link";

const PaymentPage = () => {
  return (
    <div className="bg-gray-100 p-8  ">
      <div className=" w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col lg:flex-row gap-6 mb-8 rounded-lg bg-white p-8 shadow-md">
        {/* Billing Info Section */}
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-xl text-[#1A202C] font-bold">Billing Info</h2>
            <p className="text-sm text-[#90A3BF]">
              Please enter your billing info
            </p>
            <p className="text-right text-sm text-[#90A3BF] ">Step 1 of 4</p>
          </div>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[#1A202C]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A202C]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A202C]">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A202C]">
                Town / City
              </label>
              <input
                type="text"
                placeholder="Town or city"
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 p-3"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Rental Info */}

      <div className=" w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col md:flex-row gap-6 mb-8 rounded-lg bg-white p-8 shadow-md">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-2xl text-[#1A202C] font-bold">Rental Info</h2>
            <div className="w-full flex items-center justify-between">
              <p className="text-[#90A3BF] mb-4">
                Please select your rental date
              </p>
              <p className="text-right text-sm  text-[#90A3BF] ">Step 2 of 4</p>
            </div>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="mt-2">
                <label className="flex items-center mb-4 space-x-2">
                  <input
                    type="radio"
                    name="rentalType"
                    value="pickup"
                    className="hidden"
                  />
                  <Image
                    src="/mark (1).png"
                    alt="Pick-up"
                    width={18}
                    height={18}
                  />
                  <span className="font-medium text-[#1A202C]">Pick-Up</span>
                </label>

                <div>
                  
                  <label className="block text-sm font-semibold text-[#1A202C]">
                    Locations
                  </label>
                  <select className="mt-1 w-full rounded-lg text-[#90A3BF] border-gray-300 bg-gray-50 p-3">
                    <option>Select your city</option>
                    <option value="1">Karachi</option>
                    <option value="2">Islamabad</option>
                    <option value="3">Lahore</option>
                  </select>
                </div>
                <div>
                  <label className="block  text-sm font-semibold text-[#1A202C] ">
                    Date
                  </label>
                  <select className="mt-1 w-full  rounded-lg text-[#90A3BF] border-gray-300 bg-gray-50 p-3">
                    <option>Select your Date</option>
                    <option value="1">January 25</option>
                    <option value="2">February 21</option>
                    <option value="3">April 25</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A202C] ">
                    Time
                  </label>
                  <select className="mt-1 w-full rounded-lg text-[#90A3BF] border-gray-300 bg-gray-50 p-3">
                    <option>Select your time</option>
                    <option value="1">Morning</option>
                    <option value="2">Afternoon</option>
                    <option value="3">Evening</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="flex items-center mb-4 space-x-2">
                    <input
                      type="radio"
                      name="rentalType"
                      value="DropOff"
                      className="hidden"
                    />
                    <Image
                      src="/mark (2).png"
                      alt="Drop-Off"
                      width={18}
                      height={18}
                    />
                    <span className="font-medium text-[#1A202C] ">
                      Drop-Off
                    </span>
                  </label>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] ">
                      Locations
                    </label>
                    <select className="mt-1 w-full rounded-lg text-[#90A3BF] border-gray-300 bg-gray-50 p-3">
                      <option>Select your city</option>
                      <option value="1">Karachi</option>
                      <option value="2">Islamabad</option>
                      <option value="3">Lahore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] ">
                      Date
                    </label>
                    <select className="mt-1 w-full rounded-lg text-[#90A3BF] border-gray-300 bg-gray-50 p-3">
                      <option>Select your Date</option>
                      <option value="1">January 25</option>
                      <option value="2">February 21</option>
                      <option value="3">April 25</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold  text-[#1A202C]">
                      Time
                    </label>
                    <select className="mt-1 w-full rounded-lg text-[#90A3BF] border-gray-300 bg-gray-50 p-3">
                      <option>Select your time</option>
                      <option value="1">Morning</option>
                      <option value="2">Afternoon</option>
                      <option value="3">Evening</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Payment Method */}
      <div className=" w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col md:flex-row gap-6 mb-6 rounded-lg bg-white p-8 shadow-md">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-xl text-[#1A202C] font-bold">Payment Method</h2>
            <p className="text-sm text-[#90A3BF]">
              Please enter your payment method
            </p>
            <p className="text-right text-sm text-[#90A3BF]">Step 3 of 4</p>
          </div>
          <form className="space-y-6">
            <div className="w-full lg:w-[804px] h-auto lg:h-[308px]  bg-[#F6F7F9] rounded-lg">
              <div>
                <label className="flex  items-center space-x-2">
                  <input
                    type="radio"
                    name="rentalType"
                    value="Credit Card"
                    className="hidden"
                  />
                  <Image
                    src="/mark (1).png"
                    alt="Credit Card"
                    width={17}
                    height={17}
                  />
                  <span className="font-medium m-4  text-[#1A202C]">
                    Credit Card
                  </span>
                </label>

                <Image src="/Visa.png" alt="Visa" width={92} height={20} />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium p-2 text-[#1A202C]">
                      Card number
                    </label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-[362px] rounded-lg border-gray-300  bg-white m-2 p-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium p-2 text-[#1A202C]">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      placeholder="DD / MM / YY"
                      className="w-[362px] rounded-lg border-gray-300 m-2 bg-white p-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium p-2 text-[#1A202C]">
                      Card holder
                    </label>
                    <input
                      type="text"
                      placeholder="Card holder"
                      className="w-[362px] rounded-lg border-gray-300 m-2 bg-white p-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium p-2 text-[#1A202C]">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className=" w-[362px] rounded-lg border-gray-300 bg-white m-2 p-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[804px] mt-1 bg-gray-50 flex items-center space-x-4 rounded-lg">
              <input type="radio" name="payment" className="form-radio m-2" />

              <span className="font-medium text-[#1A202C]">PayPal</span>

              <Image
                src="/PayPal.png"
                alt="PayPal"
                width={100}
                height={24}
                className=""
              />
            </div>

            <div className=" w-[804px] items-center mt-1 bg-gray-50 flex space-x-4 rounded-lg">
              <input type="radio" name="payment" className="form-radio m-2" />
              <span className="font-medium text-[#1A202C]">Bitcoin</span>

              <Image
                src="/Bitcoin.png"
                alt="Bitcoin"
                width={94}
                height={24}
                className="m-4 "
              />
            </div>
          </form>
        </div>
      </div>
      {/* Confirmation */}
      <div className=" w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col md:flex-row gap-8 rounded-lg bg-white p-8 shadow-md">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-xl text-[#1A202C] font-bold">Confirmation</h2>
            <p className="text-sm text-[#90A3BF]  ">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
            <p className="text-right text-sm text-[#90A3BF]  ">Step 4 of 4</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="flex items-center space-x-4 w-full rounded-lg   border-gray-300 bg-gray-50 p-3 ">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  I agree with sending marketing and newsletter emails. No spam,
                  promised!
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-4 w-full rounded-lg border-gray-300 bg-gray-50 p-3 mb-5 ">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <Link href="/userPage">
              <button className="w-[110px] rounded-md bg-blue-600  hover:bg-blue-700 py-2.5  text-white">
                Rent Now
              </button>
            </Link>
            <Image
              src="/ic-security-safety.png"
              alt="Logo"
              width={30}
              height={30}
              className="w-[30px] h-[30px] "
            />
            <h2 className="font-bold text-[#1A202C] ">
              All your data are safe
            </h2>
            <p className="text-sm text-[#90A3BF] ">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </form>
        </div>
      </div>

      {/* Rental Summary Section */}
      <div className="bg-gray-100 flex  flex-col lg:flex-row">
        <div className="w-[492px] h-[560px] flex justify-between items-center ">
          <Image
            src="/Rental Summary.png"
            alt="Rental Summary"
            width={400}
            height={500}
            className=" rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
