"use client";

import {
  Header2,
  Header3,
  Header4,
  Paragraph1,
  
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";


function Section3() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] xl:py-[100px]  text-p_black">
        {" "}
        <div
          className=" flex xl:gap-[14px] flex-col items-center w-full mb-[24px] xl:mb-[24px]"
          data-aos="fade-up"
        >
          <Header2>Get to Know GreenYield</Header2>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Your Partner in Cultivation and Sustainable Growth
          </Paragraph1>
        </div>
        <div className=" grid col-span-1 xl:items-center xl:grid-cols-6 gap-[24px] xl:gap-[24px]">
          <div className=" xl:col-span-3">
            <div
              className=" bg-bg_gray rounded-lg p-[31px] overflow-hidden "
              data-aos="fade-left"
            >
              <img
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733244526/utilities/greenyield/portrait-group-of-team-worker-organic-vegetables-hydroponics-farm_zlmjbs.jpg"
                alt="branding"
                className="w-full rounded-lg"
              />{" "}
            </div>
          </div>
          <div className=" xl:col-span-3  xl:space-y-[30px]">
            <div className="  " data-aos="fade-right">
              <div className="space-y-[12px]  xl:space-y-[32px] md:space-y-[32px]">
                <Header4>Feeding the Globe, One Harvest at a Time</Header4>{" "}
                <Paragraph1>
                  GreenYield, powered by a passionate team of agricultural
                  innovators and sustainability advocates, is the driving force
                  behind a new era of farming. Inspired by the vision of a
                  food-secure future, GreenYield was created to connect
                  landowners, farmers, and consumers in a shared mission to
                  nourish the world.
                </Paragraph1>
                <Paragraph1>
                  Our motivation comes from a commitment to sustainability,
                  collaboration, and the belief that every piece of land—big or
                  small—can contribute to feeding the globe while fostering
                  prosperity for all involved.
                </Paragraph1>
                <div>
                  <Link
                    href="/about-us"
                    className=" text-[20px] text-primary font-bold underline "
                  >
                    <Paragraph1> Read More</Paragraph1>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
