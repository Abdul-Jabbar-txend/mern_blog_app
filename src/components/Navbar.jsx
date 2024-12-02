import React, { useState } from "react";
import ImageComponent from "./ImageComponent ";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo  */}
      <div className="flex items-center gap-4 text-2xl font-bold ">
        <ImageComponent src="logo.png" alt="J-tech" w={32} h={32} />
        <span>j-tech</span>
      </div>
      {/* mbile view  */}
      <div className="md:hidden">
        {/* mbile button  */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* mobile links list  */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16   transition-all ease-in-out ${
            open ? "-right-0 " : "-right-[100%]"
          }`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ">
              Login 🤚
            </button>
          </a>
        </div>
      </div>
      {/* desktop view  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ">
            Login 🤚
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
