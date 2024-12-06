"use client";

import { Header2, Header3, Header4, Paragraph1, Paragraph2 } from "@/components/Text";
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
                  Our motivation is built upon a profound commitment to
                  sustainability, collaboration, and the belief that every piece
                  of land, no matter its size, holds the potential to make a
                  significant impact on the world. We see the earth as a canvas
                  of opportunity—a place where innovation, effort, and purpose
                  come together to create solutions to one of humanity’s most
                  pressing challenges: feeding a growing global population.
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" py-6 space-y-6">
          <Paragraph1>
            From the smallest backyard to the most expansive farmland, we view
            each acre as a vital contributor to the global food chain. Our
            mission is to unlock this potential through modern farming
            techniques, eco-conscious practices, and a spirit of collaboration
            that empowers landowners, farmers, and communities alike. We believe
            that sustainable agriculture is not just about growing crops—it’s
            about cultivating a future where every stakeholder, from the
            individual farmer to the global consumer, benefits from a more
            equitable and thriving system.
          </Paragraph1>
          <Paragraph1>
            Through partnerships, education, and cutting-edge technology, we aim
            to transform the way land is used, ensuring it serves not just as a
            means of production but as a cornerstone of environmental
            preservation and economic empowerment. Our approach is holistic: we
            embrace innovation to enhance yields, prioritize transparency to
            build trust, and place community at the heart of every decision.
          </Paragraph1>
          <Paragraph1>
            Ultimately, we are driven by a vision of a world where every piece
            of land contributes to a better tomorrow. It’s a vision that fuels
            our passion, guides our actions, and inspires us to push boundaries,
            cultivate resilience, and foster prosperity for all involved. This
            is not just our mission—it’s our promise to the planet and to those
            who rely on it.
          </Paragraph1>
        </div>
      </div>
    </div>
  );
}

export default Section3;
