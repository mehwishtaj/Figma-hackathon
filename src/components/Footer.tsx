import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full h-auto mt-4 px-6 py-8">
      <div className="flex flex-wrap justify-between gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-2xl text-[#3563E9] font-bold">MORENT</h1>
          <p className="mt-2 text-sm text-gray-700 max-w-xs">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-8 lg:gap-12">
          {/* About Section */}
          <div className="min-w-[120px]">
            <h3 className="font-semibold text-[#1A202C] mb-2">About</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="min-w-[120px]">
            <h3 className="font-semibold text-[#1A202C] mb-2">Community</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="min-w-[120px]">
            <h3 className="font-semibold text-[#1A202C] mb-2">Socials</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Discord</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t pt-6 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-600">
        <p className="text-center w-full md:w-auto">
          ©2024 MORENT. All rights reserved
        </p>
        <div className="flex justify-center gap-6">
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
