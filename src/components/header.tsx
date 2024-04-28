"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

interface iPageLink {
  name: string;
  link: string;
}
export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const pageLinks: iPageLink[] = useMemo(
    () => [
      {
        name: "Showcase",
        link: "showcase",
      },
      {
        name: "Docs",
        link: "docs",
      },
      {
        name: "Blog",
        link: "blog",
      },
      {
        name: "Showcase",
        link: "showcase",
      },
      {
        name: "About Us",
        link: "about-us",
      },
    ],
    []
  );
  return (
    <div className="shadow-lg w-full fixed top-0 left-0">
      <div className="w-full py-4 lg:flex lg:flex-row lg:justify-between items-center bg-white px-8">
        {/* icon and links */}
        <div className="lg:gap-10 lg:flex lg:flex-row items-center">
          <Image
            src={"https://assets.aeonbank.com.my/aeon_bank_full_5b775171cd.png"}
            alt="aeon logo"
            width={140}
            height={120}
            priority
          />
          <div
            className={`lg:flex lg:items-center lg:gap-10 absolute lg:static lg:z-auto z-[-1] left-0 bg-white w-full px-8 transition-all  duration-500 ease-in ${
              isOpenMenu
                ? "top-[16px] opacity-100"
                : "top-[-200px] lg:opacity-100 opacity-0"
            }`}
          >
            {pageLinks?.map((item, index) => {
              return (
                <div
                  className="font-outfit text-lg font-[400] lg:my-0 my-4 duration-500"
                  key={index}
                >
                  <a href={item.link}>{item.name}</a>
                </div>
              );
            })}
          </div>
        </div>
        {/* search and icons  */}
        <div className="flex flex-row gap-10">
          <input
            name="searchBar"
            placeholder="search documentation..."
            className="px-4 py-2 border rounded-md font-outfit bg-gray-100 focus:outline-none hidden lg:block"
          ></input>
          <span className="material-symbols-outlined absolute right-[72px] cursor-pointer lg:hidden top-4">
            search
          </span>
          <span
            className="material-symbols-outlined absolute right-8 cursor-pointer lg:hidden top-4"
            onClick={() => setIsOpenMenu((currState) => !currState)}
          >
            {isOpenMenu ? "close" : "menu"}
          </span>
        </div>
      </div>
    </div>
  );
}
