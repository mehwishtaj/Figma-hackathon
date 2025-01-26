import Image from "next/image";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  
return (
  <div className="h-auto  w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white">

  {/* Logo Section */}
  <h1 className="text-[#3563E9] text-[32px] font-bold">MORENT</h1>

  {/* Search Section */}
  <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
        
  
    <IoIosSearch className="text-gray-500 text-xl " />
    <input
      type="text"
      placeholder="Search something here"
      className="flex-1 bg-transparent border-none outline-none text-sm px-2 w-[492px] h-[44px]"
  
    />
    <Image
      src="/filter.png"
      width={20}
      height={20}
      alt="Filter options"
      className="cursor-pointer"
    />
  </div>

  {/* Icons Section */}
  <div className="flex gap-4 mr-3 text-gray-700 text-xl">
  <Image src="/Like.png" width={42} height={42} alt="like" className="rounded-full" />
  <Image src="/Notification.png" width={42} height={42} alt="noti" className="rounded-full" />
  <Image src="/Settings.png" width={42} height={42} alt="setting" className="rounded-full" />
  <Image src="/Profil.png" width={44} height={44} alt="Profile" className="rounded-full" />
  </div>
</div>
)};
export default Header;
