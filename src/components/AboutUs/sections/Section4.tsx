"use client";


import { Header2, Header3, Header4, Paragraph1, Paragraph2 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section4() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className=" bg-bg_gray">
      <div className=" container1 py-[54px] xl:py-[100px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header2 className="text-center">
            Our <span className="text-primary">Three Core Agendas</span> for a
            Sustainable Future
          </Header2>
          <Paragraph1 className="max-w-[883px] text-center">
            At the heart of our mission lies a commitment to addressing global
            challenges through innovative solutions in Food Security, Education,
            and Community Empowerment.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-2">
            <div
              className=" bg-[#e1ceff] py-[24px] xl:py-[53px] p-[32px] rounded-lg "
              data-aos="fade-right"
            >
              <div className="space-y-[24px] xl:space-y-[32px]    ">
                <div className=" flex- hidden w-full justify-end-  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </div>
                <Header4>Food Security</Header4>
                <Paragraph2>
                  Our top priority is ensuring that every piece of land is
                  utilized effectively to contribute to global food security.
                  Through sustainable farming practices and innovative
                  technologies, we strive to grow enough to nourish communities
                  and support a thriving planet.
                </Paragraph2>
                <div>
                  <Link
                    href="/products"
                    className="text-[20px] font-bold underline"
                  >
                    <Paragraph1>Learn More</Paragraph1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div className=" bg-[#c7cbb9]  rounded-lg " data-aos="fade-up">
              <div className="space-y-[24px] xl:space-y-[32px] p-[32px] py-[24px]  xl:py-[53px]">
                <div className=" flex- hidden w-full justify-end-  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <Header4>Education</Header4>
                <Paragraph2>
                  We believe that knowledge is the key to transformation. By
                  offering agro-courses, educational videos, and resources, we
                  empower individuals with the skills and understanding to
                  revolutionize farming practices and contribute to a
                  sustainable future.
                </Paragraph2>
                <div>
                  <Link
                    href="/products"
                    className="text-[20px] font-bold underline"
                  >
                    <Paragraph1>Explore Resources</Paragraph1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div className=" bg-[#ff7878]  rounded-lg " data-aos="fade-left">
              <div className="space-y-[24px] xl:space-y-[32px] p-[32px] py-[24px]  xl:py-[53px]">
                <div className=" flex- hidden w-full justify-end-  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </div>
                <Header4>Community Empowerment</Header4>
                <Paragraph2>
                  We are committed to fostering prosperity by building strong,
                  self-reliant communities. Through partnerships,
                  revenue-sharing models, and accessible tools, we empower
                  farmers, landowners, and local organizations to thrive
                  together.
                </Paragraph2>
                <div>
                  <Link
                    href="/products"
                    className="text-[20px] font-bold underline"
                  >
                    <Paragraph1>Join the Movement</Paragraph1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
