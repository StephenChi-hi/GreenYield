"use client";

import Button from "@/components/Button";
import { Header1, Header2, Header3, Paragraph2 } from "@/components/Text";
import React from "react";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="">
      <div className="  relative h-[450px]  overflow-hidden  w-full bg-primary">
        <div
          className="relative z-10 px-2 container1 py-[32px] pt-[150px] xl:py-[70px]"
          data-aos="fade-right"
        >
          <div className=" flex  xl:mt-[100px] xl:max-w-[50%]  flex-col xl:w-[60%] w-full xl:space-y-[24px] bg-primary p-6 rounded-lg ">
            <Header2 className="text-white col-span-1">
              Embrace the power of growth and transformation through sustainable
              practices.
            </Header2>
            <Paragraph2 className="xl:mt-[16px] mb-[24px] xl:mb-[48px] text-white">
              We believe in nurturing the earth and empowering individuals to
              create lasting change. 
            </Paragraph2>
          </div>
        </div>

        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover xl:-top-[100px] xl:-left-[0px] -left-[150px] -top-[24px] bg-center- z-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733287499/utilities/greenyield/Importance-of-Supporting-Local-Farmers-with-Every-Meal__mlfeca.jpg')",
          }}
        ></div>
        {/* Dark overlay for the background image */}
        <div className="absolute inset-0  bg-primary opacity-20 z-0"></div>
      </div>
    </div>
  );
}

export default HeroSection;
