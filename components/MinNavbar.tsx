import Link from "next/link";
import React from "react";

const MinNavbar = () => {
  return (
    <div className="flex justify-start py-5 px-3">
      <div className="flex flex-wrap justify-evenly w-[300px] font-bold text-xs">
        <Link href={"/"} className="text-ab-orange">About</Link>
        <Link href={"/"}>Jobs</Link>
        <Link href={"/"}>Apprenticeships</Link>
      </div>
    </div>
  );
};

export default MinNavbar;
