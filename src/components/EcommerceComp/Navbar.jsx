import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full h-20 bg-blue-400 items-center justify-between px-6 md:px-9 ">
      <div className=" flex gap-4 items-center">
        <img src="./Images/Cart.png" alt="" className="w-14 h-14 md:w-20 md:h-20" />
        <h2 className="font-bold text-3xl">React Store</h2>
      </div>
      <div className="hidden md:flex bg-white opacity-70 w-lg h-12 overflow-hidden rounded-3xl shadow ">
        <select name="" id="" className="text-gray-700 h-12 bg-transparent outline-none border-gray-600 border-r-2 py-3 pl-3">
          <option value="" >Choose</option>
          <option value="">Men</option>
          <option value="">Women</option>
          <option value="">Kids</option>
        </select>

        <input type="text" className="pl-2 h-12 flex-1 border-none outline-none" placeholder="Search Products or Brands..."/>
      </div>
      <div className="flex gap-8">
        <button className="text-gray-600 font-semibold text-xl hover:underline cursor-pointer ">Log Out</button>
        <img src="./Images/Icon.png" alt="" className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

