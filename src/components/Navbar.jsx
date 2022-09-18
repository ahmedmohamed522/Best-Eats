import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const closeNav = () => {
        setNav(false);
    };
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div
                    onClick={() => {
                        setNav(!nav);
                    }}
                    className="cursor-pointer"
                >
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 select-none">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center  bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2 cursor-pointer select-none">
                        Delivery
                    </p>
                    <p className="p-2 cursor-pointer select-none">Pickup</p>
                </div>
            </div>

            {/* Search input */}

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] focus-within:w-[250px] sm:focus-within:w-[400px] lg:focus-within:w-[500px] transition-all">
                <AiOutlineSearch size={25} />
                <input
                    className="bg-transparent w-full p-2 focus:outline-none"
                    type="text"
                    placeholder="Search foods"
                />
            </div>

            {/* Card button */}
            <button className=" bg-black text-white py-2 hidden md:flex items-center gap-2 rounded-full">
                <BsFillCartFill size={20} />
                <span>Cart</span>
            </button>

            {/* Mobile Menu */}

            {/* Overlay */}
            {nav && (
                <div onClick={closeNav} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            )}
            {/* Side drawer menu*/}

            <div
                className={`fixed top-0  w-[300px] h-screen bg-white z-10  duration-300 ${
                    nav ? "left-0" : "left-[-100%]"
                }`}
            >
                <AiOutlineClose
                    onClick={() => {
                        setNav(!nav);
                    }}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <h2 className="text-2xl p-4 ">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex">
                            <TbTruckDelivery size={25} className="mr-4" /> <span>Orders</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdFavorite size={25} className="mr-4" /> <span>Favorites</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaWallet size={25} className="mr-4" /> <span>Wallet</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <AiFillTag size={25} className="mr-4" /> <span>Help</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <BsFillSaveFill size={25} className="mr-4" /> <span>Promotions</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaUserFriends size={25} className="mr-4" /> <span>Best Ones</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <TbTruckDelivery size={25} className="mr-4" /> <span>Invite Friends</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
