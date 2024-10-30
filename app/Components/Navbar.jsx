"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBagShopping, FaSleigh } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTrash } from "react-icons/fa6";
import { useItemContext } from "../ItemContext";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { item, setItem } = useItemContext();

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;

    setItem((prevItems) => {
      const updatedItems = prevItems.map((cartItem, i) =>
        i === index ? { ...cartItem, quantity: newQuantity } : cartItem
      );
      console.log("Updated Items:", updatedItems);
      return updatedItems;
    });
  };
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <nav className="flex md:justify-evenly justify-between items-center bg-orange-50 drop-shadow-sm p-1 relative z-50">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={"/img/logo.png"}
                width={300}
                height={300}
                className="w-16 h-10 hover:scale-110 transition duration-300 mr-5"
                alt="logo"
              />
            </Link>

            <div className="hidden md:block uppercase text-[16px] space-x-5">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
              >
                Menu
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
              >
                rewards
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
              >
                locations
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
              >
                gift card
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
              >
                Login
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4 relative">
            <FaBagShopping
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="group text-2xl cursor-pointer hover:text-red-600 transition duration-200"
            />
            {item.length != 0 ? (
              <div
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="cursor-pointer absolute top-0 left-0 group-hover:text-white text-white -translate-x-5 bg-red-500 px-[3px] text-sm rounded-xl shadow translate-y-1"
              >
                {item.length}
              </div>
            ) : (
              ""
            )}

            <Link
              href="#"
              className="hidden md:block uppercase font-semibold bg-gradient-to-bl from-red-500 to-red-600 hover:scale-105 transition duration-200 rounded-md px-5 py-2 text-white text-sm"
            >
              Order Now
            </Link>
            <button
              className="text-2xl pr-5 pt-1 block md:hidden hover:text-red-600 transition duration-200"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
        <div
          className={`fixed z-50 overflow-y-auto top-0 right-0 h-full w-[300px] bg-orange-400 shadow-lg transition-transform duration-300 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => {
              setIsCartOpen(false);
            }}
            className="absolute font-bold top-6 right-4 shadow-lg text-xl w-7 h-7 rounded-full bg-gray-200"
          >
            ✕
          </button>
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Cart items is {item.length}
            </h2>
            {item?.map((cartItem, index) => (
              <div
                key={index}
                className="mt-8 text-white p-1 border border-white relative"
              >
                <div className="flex items-center justify-start space-x-3">
                  <Image
                    src={cartItem.image}
                    width={100}
                    height={50}
                    alt="cartImage"
                  ></Image>
                  <div>
                    <h1 className="text-sm font-bold text-white">
                      {cartItem.title}
                    </h1>
                    <h1 className="font-light text-xs">
                      {cartItem.price}$/each
                    </h1>
                    <div className="flex justify-start items-center space-x-1">
                      <div
                        onClick={() =>
                          handleQuantityChange(index, cartItem.quantity - 1)
                        }
                        className="cursor-pointer px-2 rounded-sm shadow-sm bg-white text-black"
                      >
                        -
                      </div>
                      <input
                        type="number"
                        name="quantity"
                        value={cartItem.quantity ?? 1}
                        className="w-10 text-center text-black pl-3"
                        readOnly
                      />
                      <div
                        onClick={() =>
                          handleQuantityChange(index, cartItem.quantity + 1)
                        }
                        className="px-1 cursor-pointer rounded-sm shadow-sm bg-white text-black"
                      >
                        +
                      </div>
                    </div>
                    <h2 className="text-end text-xs mt-2">
                      {cartItem.quantity * cartItem.price}$/each
                    </h2>
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0 text-red-500 p-[3px] text-sm translate-x-2 -translate-y-2 hover:scale-105 transition duration-200 rounded-md shadow cursor-pointer bg-white"
                  onClick={() => {
                    setItem((prevItems) =>
                      prevItems.filter((item) => item.id !== cartItem.id)
                    );
                  }}
                >
                  <FaTrash />
                </div>
              </div>
            ))}
            {item.length == 0 ? (
              <div>
                <div className="mt-10 border rounded-md p-1 text-white text-center py-4">
                  No Cart items added
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* Mobile nav link  */}
      <div
        className={`${
          isNavOpen ? "translate-y-0" : "-translate-y-[1000px]"
        } transition-all duration-200 ease-in-out uppercase text-[16px] space-x-5 bg-orange-50 w-full fixed z-30`}
      >
        <div className="flex flex-col justify-center  items-center space-y-4 py-3 pb-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
          >
            Menu
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#"
            className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
          >
            rewards
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#"
            className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
          >
            locations
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#"
            className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
          >
            gift card
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#"
            className="text-gray-700 hover:text-red-600 relative group pb-1 transition-all duration-300"
          >
            Logins
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="uppercase font-semibold bg-gradient-to-bl from-red-500 to-red-600 hover:scale-105 transition duration-200 rounded-md px-5 py-2 text-white text-sm"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
