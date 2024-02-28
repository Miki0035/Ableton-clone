"use client";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/constants";
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState("hidden");
  return (
    <header>
      <nav className="border-2 flex justify-between max-[1025px]:justify-start  px-4">
        <div className="flex py-3 items-center">
          <Image
            src={"/ableton-logo.svg"}
            alt="logo"
            className="mx-5"
            width={50}
            height={50}
            priority
          />
          <ul className="flex justify-evenly flex-1 max-[1025px]:hidden">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-lg cursor capitalize mx-3 font-bold"
              >
                <Link href={"#"}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex max-[1025px]:hidden py-3 items-center">
          <ul className="flex capitalize">
            <li className="text-ab-blue font-bold mr-[30px]">
              <Link href={"#"}>try live for free</Link>
            </li>
            <li className="text-xs font-semibold my-2">
              <Link href={"#"}>log in or register</Link>
            </li>
          </ul>
        </div>
        <div className="max-[1025px]:flex hidden">
          <button
            type="button"
            onClick={() =>
              show === "hidden" ? setShow("flex") : setShow("hidden")
            }
            className="cursor"
          >
            Menu 
          </button>
          <div
            className={` ${show} bg-ab-blue  flex absolute z-10 w-screen h-screen top-20 left-0 text-white  `}
          >
            <ul className="flex flex-col w-full h-full">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-[15px] cursor shadow-2xl  capitalize mx-3 font-bold my-5  py-1 px-1"
                >
                  <Link href={"#"}>{link}</Link>
                </li>
              ))}
              <li className="text-[15px] cursor shadow-2xl capitalize mx-3 font-bold my-5">
                <Link href={"#"}>try live for free</Link>
              </li>
              <li className="text-xs cursor capitalize mx-3 font-bold my-5 ">
                <Link href={"#"}>log in or register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
