import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
         {/* Left side */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={35} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text 4xl px-2">
          Glovo <span className="font-bold">Eats</span>
        </h1>
      </div>
       {/* Seaarch bar */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="search foods"
        />
      </div>

       {/* Cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={25} className="mr-2" />
        Cart
      </button>
      
       {/* mode of transport */}
      <div className="hidden lg:flex  items-center  bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="text-white bg-black rounded-full p-2">Delivery</p>
        <p className="p-2">Pick Up</p>
      </div>

      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px]  h-screen  bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px]  h-screen  bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
        />
        <h2 className="text-2xl p-4">
          Glovo<span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col text-gray-800 p-4">
            <li className="text-xl flex py-4">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl flex py-4">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="text-xl flex py-4">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl flex py-4">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl flex py-4">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl flex py-4">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl flex py-4">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
