import React from "react";
import Image from "next/image";
import Button from "../Button";
import { homepageData } from "@/app/data/data";

const Banner = () => {
  return (
    <div className="md:bg-[url('/assets/bull_photo_banner.jpg')] bg-cover bg-center w-screen h-[34rem]">
     


      <div className="flex flex-col items-center justify-center gap-6 mt-10 md:block md:ml-[4rem]">

      {/* ugly coloured box */}
      <div className="w-[340px] bg-gradient-to-r from-magenta via-citrus to-aqua rounded-2xl py-4 sm:mb-[2rem]">

        {/* welcome message title */}
        <div className="flex justify-center gap-2 mt-6 px-4">
          <h1 className="font-bold text-4xl text-black">
          Welcome to{" "}</h1>
          <Image
            src="./assets/BRUMAI_BLACK.svg"
            width="130"
            alt="brumAI logo"
            height="80"
            className=""
          />
        </div>
        {/* welcome message */}
        <div className="px-6 mt-2">
          <p className="text-sm text-black mt-4 text-center font-medium lg:text-base">
            {homepageData.aboutBanner}
          </p>
        </div>

        </div>


        {/* next event button */}
        <div className="">
        <Button text={"Next event"} location={"/events"} />
        </div>

      </div>
      

    </div>
  );
};

export default Banner;
