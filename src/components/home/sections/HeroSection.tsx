"use client";

import Button from "@/components/Button";
import { Header1, Header2, Header3, Paragraph2 } from "@/components/Text";
import React from "react";
import ElevatingBrands from "./others/ElevatingBrands";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="  ">
      <div className="xl:py-[150px] relative py-[50px] xl:pt-[150px] pt-[100px] bg-black pb-[100px]">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover opacity-50  bg-center- z-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733198651/utilities/dan-meyers-0AgtPoAARtE-unsplash_pjk7xo.jpg')",
          }}
        ></div>
        {/* Dark overlay for the background image */}
        <div className="absolute inset-0  bg-primary opacity-25 z-0"></div>
        <div className=" container1 flex justify-center w-full items-center ">
          {" "}
          <div className="col-span-2 order-2 max-w-[900px] lg:order-1 text-center">
            <div data-aos="fade-down">
              <Header1 className="text-white mt-4 xl:mt-0">
                Your trusted partner in transforming idle land into thriving,
                sustainable harvests.
              </Header1>
              <Paragraph2 className="mt-[16px] mb-[48px] text-white">
                Agriculture begins with opportunity. Empower your land and be
                part of a greener, more fruitful future with GreenYield.
              </Paragraph2>
            </div>

            <div className="flex justify-center  xl:flex-row flex-col items-center mt-4 gap-[24px] xl:gap-[32px]">
              <div
                data-aos="fade-right"
                className=" flex w-full justify-center- "
              >
                <Button
                  text="Get Started"
                  href="/products"
                  isLink={true}
                  border="border-2 border-primary "
                  additionalClasses="border-primary xl:w-fit- w-full  "
                />
              </div>
              <div
                data-aos="fade-left"
                className=" flex w-full justify-center-"
              >
                <Button
                  text="About Us"
                  href="/about-us"
                  isLink={true}
                  color="text-white"
                  backgroundColor=" bg-p_black"
                  border="border-2 border-white "
                  additionalClasses=" xl:w-fit- w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-bg_gray h-[350px] sm:h-[120px] ">
        <div className=" container1 relative flex w-full justify-center ">
          <div className=" text-center items-center absolute -top-[70px] justify-center min-w-full gap-6 grid py-4 grid-cols-2 sm:grid-cols-4">
            <div className=" ">
              <div className=" flex flex-col items-center    ">
                <div className=" justify-center items-center p-6 flex w-fit rounded-full bg-white">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/earth_kxkycj.png"
                    alt=""
                    className=" h-[60px] w-[60px]"
                  />
                </div>
                <Header3>Maximize Land Value </Header3>
              </div>
            </div>

            <div className=" ">
              <div className=" flex flex-col items-center      ">
                <div className=" justify-center items-center p-6 flex w-fit rounded-full bg-white">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/smartphone_jnlpvl.png"
                    alt=""
                    className=" h-[60px] w-[60px]"
                  />
                </div>
                <Header3>Tech-Driven Farming </Header3>
              </div>
            </div>
            <div className=" ">
              <div className=" flex flex-col items-center     ">
                <div className=" justify-center items-center p-6 flex w-fit rounded-full bg-white">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/save-the-planet_vkyull.png"
                    alt=""
                    className=" h-[60px] w-[60px]"
                  />
                </div>
                <Header3>Eco-Friendly Methods </Header3>
              </div>
            </div>
            <div className=" ">
              <div className=" flex flex-col items-center  z-10 -top-[70px]   ">
                <div className=" justify-center items-center p-6 flex w-fit rounded-full bg-white">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/sustainability_o3ibma.png"
                    alt=""
                    className=" h-[60px] w-[60px]"
                  />
                </div>
                <Header3>Transparent Returns </Header3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
