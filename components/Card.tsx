import Link from "next/link";
import React from "react";

const Card = ({
  image,
  bgColor,
  mainText,
  linkText,
}: {
  image: string;
  bgColor: string;
  mainText: string;
  linkText: string;
}) => {
  return (
    <div className="flex px-32 h-[120%] w-full justify-center max-[1200px]:flex-col max-[1200px]:items-center  max-[600px]:px-12">
      <div className="w-full h-full flex justify-center max-[1000px]:h-1/2dvh">
        <img src={`/${image}`} alt={image} className="w-full h-full" />
      </div>
      <div
        className={`w-5/2 flex flex-col justify-center text-xl max-[1000px]:text-sm max-[600px]:text-xs`}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className="leading-8 py-5 px-3  flex flex-col items-center max-[1200px]:items-start max-[1000px]:leading-normal">
          <h4 className="font-light mb-12 w-2/3 max-[1200px]:w-full max-[1000px]:mb-3">
            {mainText}
          </h4>
          <Link className="w-2/3 font-bold text-ab-blue" href={linkText}>
            {linkText} &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
