import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-full mt-48 py-5 px-20 max-[900px]:px-2 max-[900px]:py-1 ">
      <h2 className="text-5xl font-bold mb-16">Ableton</h2>
      <div className="grid grid-cols-3 gap-4 max-[1200px]:grid-cols-1">
        <div className="flex flex-col max-[1200px] text-xs">
          <Link href={"/"}>Register Live or Push &gt;</Link>
          <Link href={"/"}>About Ableton &gt;</Link>
          <Link href={"/"}>Jobs &gt;</Link>
          <div className="flex items-center justify-between gap-2 mt-4 w-1/3 max-[1200px]:w-1/4 max-[1200px]:gap-0.5">
            <Link href={"https://www.facebook.com/"}>
              <img
                src="/facebook-2020-1-1.svg"
                className="w-[50px] h-[50px] max-[1200px]:w-[30px] max-[1200px]:h-[30px]"
                alt="facebook logo"
              />
            </Link>
            <Link href={"https://twitter.com/login"}>
              <img
                src="/twitter-6.svg"
                className="w-[50px] h-[50px] max-[1200px]:w-[30px] max-[1200px]:h-[30px]"
                alt="twitter logo"
              />
            </Link>
            <Link
              href={
                "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F"
              }
            >
              <img
                src="/instagram-2016-5.svg"
                className="w-[50px] h-[50px] max-[1200px]:w-[30px] max-[1200px]:h-[30px]"
                alt="instagram logo"
              />
            </Link>
            <Link href={"https://www.youtube.com/"}>
              <img
                src="/youtube-icon-5.svg"
                className="w-[50px] h-[50px] ml-2 max-[1200px]:w-[30px] max-[1200px]:h-[30px]"
                alt="youtube logo"
              />
            </Link>
          </div>
          <div className="flex flex-col mt-8">
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <Link href={"/"}>Find Ableton User Groups &gt;</Link>
            <Link href={"/"}>Find Certified Training &gt;</Link>
            <Link href={"/"}>Become a Certified Trainer &gt;</Link>
          </div>
        </div>
        <div className="flex text-xs flex-col h-full justify-center">
          <h3 className="font-semibold text-lg mb-2">Education</h3>
          <Link href={"/"}>Offers for students and teachers &gt;</Link>
          <Link href={"/"}>Ableton for the Classroom &gt;</Link>
          <Link href={"/"}>Ableton for Colleges and Universities &gt;</Link>
          <div className="mt-24">
            <h3 className="text-lg font-semibold">Language and Location</h3>
            <div className="flex mt-4 max-[900px]:flex-col gap-2">
              <select
                className="text-sm w-2/5 py-2 px-2 bg-none"
                name="language"
                id="language"
              >
                <option value="#" selected>
                  English
                </option>
              </select>
              <select
                className="text-sm w-3/5 py-2 px-2 bg-none max-[900px]:w-2/5 "
                name="country"
                id="country"
              >
                <option value="#" selected>
                  Ethiopia
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-1/2 justify-center max-[1200px]:row-start-1">
          <h3 className="font-semibold text-lg">Sign up to our newsletter</h3>
          <p className="font-light text-xs">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className="flex mt-8">
            <input
              className="border border-grey-200 py-2 px-2 w-2/3"
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
            />
            <button className="bg-ab-blue text-white px-6 py-2 text-center font-bold text-xs">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-24 flex justify-between w-full max-[900px]:flex-col">
        <div className="flex justify-evenly items-center text-xs w-1/2  max-[1050px]:w-2/3 max-[900px]:flex-col max-[900px]:w-full max-[900px]:items-start max-[900px]:gap-2">
          <Link href={"/"}>Contact Us</Link>
          <Link href={"/"}>Press Resources</Link>
          <Link href={"/"}>Legal Info</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Cookie Settings</Link>
          <Link href={"/"}>Imprint</Link>
        </div>
        <div className="flex text-xs justify-center items-center max-[900px]:flex-row-reverse max-[900px]:justify-end max-[900px]:mt-6">
          <span>Made in Berlin</span>
          <img
            src="/ableton-logo.svg"
            className=" mx-2 w-[50px] h-[50px]"
            alt="Ableton logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
