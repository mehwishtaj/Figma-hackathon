import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-1/4 h-auto bg-white p-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full bg-white p-4 rounded-lg ">
            <h2 className="text-sm text-[#90A3BF] font-semibold mb-4">Type</h2>
            <ul>
              {[
                "Sport (10)",
                "SUV (12)",
                "MPV (16)",
                "Sedan (20)",
                "Coupe (14)",
                "Hatchback (14)",
              ].map((type, index) => (
                <li key={type} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 rounded-full"
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-sm text-[#90A3BF] font-semibold mt-6 mb-4">
              Capacity
            </h2>
            <ul>
              {[
                "2 Person   (10)",
                "4 Person   (14)",
                "6 Person   (12)",
                "8 or More  (16)",
              ].map((capacity) => (
                <li key={capacity} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 rounded-full"
                    />
                    <span className="ml-2">{capacity}</span>
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-sm text-[#90A3BF] font-semibold mt-6 mb-4">
              Price
            </h2>
            <input type="range" min="0" max="100" className="w-full" />
            <p className="text-sm text-gray-500 mt-2">Max: $100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
