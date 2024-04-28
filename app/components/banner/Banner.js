import React from "react";
import Image from "next/image";
import Button from "../Button";
import { homepageData } from "@/app/data/data";

const Banner = () => {
  return (
    <div className="md:bg-[url('/assets/bull_photo_banner.jpg')] bg-cover bg-center w-screen h-[30rem] grid grid-cols-11 md:grid-cols-12 grid-rows-6 border-2">
      <section className="flex col-start-11 row-start-6 justify-self-end md:justify-self-end md:row-start-2 mr-3">
        <Button text={"Next event"} location={"/events"} />
      </section>

      {/* ugly coloured box */}
      <div className="row-start-1 mt-3 md:row-start-2 md:mt-0 min-w-[350px] justify-self-center col-start-6 lg:min-w-[450px] lg:col-start-2 lg:justify-self-start 2xl:col-start-2 2xl:justify-self-start bg-gradient-to-r from-magenta via-citrus to-aqua h-[310px] rounded-2xl">

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
    </div>
  );
};

export default Banner;
