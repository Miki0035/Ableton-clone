import Image from "next/image";
import React from "react";

const BackgroundColorImage = ({
  bgColor,
  bgImages,
  position,
  videoUrl,
}: {
  bgColor: string;
  bgImages: string[];
  position: string;
  videoUrl?: string;
}) => {
  return (
    <div className="my-5 h-full">
      {!videoUrl ? (
        <div className="relative w-full h-screen max-[700px]:h-96">
          <div
            className={`absolute ${position}  w-3/5 h-full z-0 max-[1000px]:w-full max-[1000px]:left-0`}
            style={{ backgroundColor: `${bgColor}` }}
          ></div>
          <div
            className={` flex flex-warp items-center absolute top-[20%] left-0  w-full h-3/5 h-full z-0 max-[700px]:top-[10%]`}
          >
            <img
              className={`absolute top-[5%] left-[10%] z-1 w-1/3 max-[1000px]:top-[1%] max-[700px]:w-2/5  `}
              width={520}
              height={800}
              src={`/${bgImages[0]}`}
              alt={bgImages[0]}
            />
            <img
              className={`absolute top-[10%] right-[15%] z-2 w-96 max-[1000px]:top-[20%] max-[700px]:w-2/5`}
              width={450}
              height={400}
              src={`/${bgImages[1]}`}
              alt={bgImages[1]}
            />
          </div>
        </div>
      ) : (
        <div className={`${position} h-full w-full`}>
          <div className="h-[350px] min-[1000px]:h-[500px] w-3/5 flex justify-center max-[700px]:w-5/6  max-[530px]:h-[200px] ">
            <iframe src={videoUrl} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundColorImage;
