"use client";

import {
  Header1,
  Header2,
  Header3,
  Header4,
  Paragraph1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import CountUpGrid from "./others/CountUpGrid";


function Section5() {

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
          <Header2>Expanding Global Cultivation Projects</Header2>
          <Paragraph1 className="max-w-[883px] text-center">
            Our mission transcends borders, bringing sustainable agricultural
            solutions to communities worldwide. Join us as we collaborate on
            innovative projects to feed the globe and empower farmers
            everywhere.
          </Paragraph1>
        </div>
        <div data-aos="zoom-in" className=" h-[500px]- flex w-full">
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733265207/utilities/greenyield/map_img_awuhqj.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div data-aos="fade-up">
          <CountUpGrid />
        </div>
      </div>
    </div>
  );
}

export default Section5;
