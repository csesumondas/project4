"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useItemContext } from "../ItemContext";

export const data = [
  {
    id: 1,
    title: "Chicken",
    price: 69,
    quantity: 1,
    status: "new",
    image: "/img/chicken.jpg",
    desc: `Chicken Fajitas served with rice and beans, tortillas, guacamole,
             saisa and sour cream Chicken Fajits served wi....`,
  },
  {
    id: 2,
    title: "Fajitas",
    image: "/img/fajitas.jpg",
    status: "old",
    quantity: 1,
    price: 169,
    desc: `Chicken Fajitas served with rice and beans, tortillas, guacamole,
               saisa and sour cream Chicken Fajits served wi....`,
  },
  {
    id: 3,
    title: "Chicken masala",
    image: "/img/chickenmasala.jpg",
    status: "new",
    price: 269,
    quantity: 1,
    desc: `Chicken Fajitas served with rice and beans, tortillas, guacamole,
               saisa and sour cream Chicken Fajits served wi....`,
  },
];

const Items = () => {
  const { item, setItem } = useItemContext();

  return (
    <div className="">
      {/* Top Content/heading/Breadcrumb */}
      <div className="text-center mt-9">
        <h1 className="text-3xl text-red-500 font-bold uppercase">
          chicken crisper&reg; combos
        </h1>
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          title="Breadcrumb"
        >
          <h2 className="mr-1 text-red-500">Menu</h2>
          <IoIosArrowForward />
          <h2 className="text-gray-600">chicken crisper &reg; combos</h2>
        </div>

        <h1 className="mt-5 text-lg text-gray-800">
          Find everything from our Big Mouth Brugers&reg;, our always sizzling,
          Full-on Fajitas and our famous Chicken Crispers&reg;
        </h1>
      </div>
      {/* Card content  */}
      <div className="flex justify-center items-center my-10 gap-3 relative">
        {data?.map((dataItem) => {
          const isAdded = item.some((cartItem) => cartItem.id === dataItem.id);

          return (
            <div
              key={dataItem.id}
              className="border border-gray-300 rounded-lg p-5 bg-gray-50 flex flex-col justify-center dataItems-start"
            >
              {dataItem.status === "new" && (
                <div className="px-2 py-1 bg-red-600 text-white absolute top-0 -translate-y-5 -translate-x-10 shadow-md rounded-xl text-xs font-bold -rotate-45">
                  NEW
                </div>
              )}
              <Image
                src={dataItem.image}
                width={250}
                height={200}
                alt="chicken"
              />
              <div className="mt-2">
                <h1 className="font-bold text-xl text-gray-800">
                  {dataItem.title}
                </h1>
                <h1 className=" text-gray-600">{dataItem.price}$/each</h1>

                <p className="mt-2 text-gray-600 w-[255px] text-justify  text-sm">
                  {dataItem.desc}
                </p>

                <div className="mt-2 space-y-2">
                  <button
                    onClick={() => {
                      setItem((prev) => [...prev, dataItem]);
                    }}
                    disabled={isAdded}
                    className={`text-white rounded-lg p-1 w-full ${
                      isAdded
                        ? "bg-gray-300"
                        : "bg-orange-500 hover:bg-orange-600"
                    } transition duration-200`}
                  >
                    {isAdded ? "Added to cart" : "Add to cart"}
                  </button>
                  <button className="text-orange-500 ring-1 rounded-lg ring-orange-500 p-1 w-full hover:bg-orange-500 hover:text-white transition duration-200">
                    Customize
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
