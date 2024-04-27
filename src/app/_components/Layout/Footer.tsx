import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-white-300 pb-24">
      <div className="mx-auto grid w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-6 sm:grid-flow-col sm:grid-cols-12 sm:grid-rows-1 sm:px-8 lg:px-16">
        <div className="col-start-1 col-end-4 row-span-2 flex flex-col items-start sm:col-span-4 sm:col-end-5 ">
          <Image alt="Plate Aid" src="/plate-aid-black.png" width={160} height={160} />

          <p className="mb-4">
            <strong className="font-medium">Plate Aid</strong> is bridging the
            Gap Between Hunger and Hope, One Nourishing Meal, One Heartfelt
            Connection at a Time.
          </p>

          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Plate Aid
          </p>
        </div>

        <div className=" row-span-2 flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11">
          <p className="text-black-600 mb-4 text-lg font-medium">Utils</p>
          <ul className="text-black-500 ">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              About Us
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Contact
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Blog
            </li>
          </ul>
        </div>

        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13">
          <p className="text-black-600 mb-4 text-lg font-medium">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Github
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              FAQ
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Food List
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
