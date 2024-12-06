"use client";

import Button from "@/components/Button";
import {
  Header2,
  Header3,
  Header4,
  Paragraph1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import RandomFaces from "./others/RandomFaces";

function Section2() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[100px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col gap-[8px] xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[24px]"
          data-aos="fade-up"
        >
          <Header2>
            Where Your <span className=" text-primary">Land</span> Yields
            Prosperity
          </Header2>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Every acre we cultivate tells a story of growth, sustainability, and
            the shared success that makes your contribution invaluable.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-5  sm:grid-cols-1 gap-[24px] xl:gap-[30px]">
          <div className="  xl:col-span-3">
            <div
              className=" bg-bg_gray rounded-lg overflow-hidden "
              data-aos="fade-right"
            >
              <div className=" flex w-full h-[300px] object-cover">
                <img
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733250717/utilities/greenyield/Agriculture-4.0-5G-Powered-Innovations-in-African-Farming-min_hrubao.jpg"
                  alt="branding"
                  className="w-full h-full object-cover"
                />{" "}
              </div>

              <div className=" space-y-[24px] xl:space-y-[32px] p-[24px] xl:p-[32px] flex flex-col w-full">
                <Header4>Let{"'"}s Cultivate Something Great Together</Header4>
                <Paragraph1>
                  Whether you’re offering your land for cultivation, seeking the
                  best agricultural tools, or investing in sustainable farming,
                  we’re here to turn your vision into a thriving
                  reality—efficiently, professionally, and innovatively.
                </Paragraph1>

                <Button
                  text="Book A Session"
                  href="/contact-us"
                  isLink={true}
                  additionalClasses="border-0 xl:w-fit w-full "
                />
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 space-y-[24px] xl:space-y-[30px]">
            <div className=" bg-bg_gray rounded-lg " data-aos="fade-down-left">
              <div className="space-y-[24px] xl:space-y-[24px] p-[24px] xl:p-[24px]">
                <Header4>Growing Together</Header4>
                <Paragraph1>
                  At GreenYield, our mission is to make agriculture a
                  collaborative and rewarding experience. We’re all about
                  working together to bring your land's potential to life,
                  ensuring every harvest reflects shared success and
                  sustainability.
                </Paragraph1>
                <RandomFaces />
              </div>
            </div>
            <div
              className=" bg-primary relative overflow-hidden text-white rounded-lg "
              data-aos="fade-up-left"
            >
              <div className=" absolute bottom-0 -right-[150px] flex w-full justify-end  ">
                <div
                  style={{ transform: "rotate(-36deg)" }}
                  className=" h-8 w-[200px]- w-full border-4 border-white"
                >
                  {" "}
                </div>
              </div>
              <div className="xl:space-y-[6px] 2xl:space-y-[24px] space-y-[24px] p-[24px] xl:p-[24px]">
                <div className=" flex w-full justify-end  ">
                  <div className=" h-[40px] w-[50px]">
                    <div className=" relative h-[40px] w-[50px]">
                      <div
                        style={{ transform: "rotate(-12deg)" }}
                        className=" rounded-lg border-4 relative border-white  bg-primary h-[40px] w-[50px]"
                      ></div>
                      <div
                        style={{ transform: "rotate(8deg)" }}
                        className=" bg-primary h-full w-full overflow-hidden absolute -top-[20px] -right-[20px] p-4 border-4 border-white rounded-lg object-cover"
                      ></div>
                    </div>
                  </div>{" "}
                </div>
                <Header4>Here to Help You Thrive</Header4>
                <Paragraph1>
                  Whether it’s selecting the right cultivation plan or finding
                  the best tools and products, our goal is to ensure you feel
                  confident and supported every step of the way. Together, we’ll
                  cultivate success and grow a greener future!
                </Paragraph1>
                <div>
                  <Link
                    href="/contact-us"
                    className=" text-[20px] font-bold text-white underline"
                  >
                    <Paragraph1> Contact us</Paragraph1>
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

export default Section2;
