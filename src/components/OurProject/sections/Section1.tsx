"use client";

import Button from "@/components/Button";
import { Header2, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section1() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const services = [
    {
      name: "AgroTech Lab ",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263313/utilities/greenyield/graduation-cylinder-for-soil-test_whpews.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261272/utilities/greenyield/test-tube_mcahll.png",
      intro1: " Innovating Smart Farming Solutions",
      intro2:
        "Our dedicated team is developing and deploying cutting-edge technologies such as IoT, AI, and drones to enhance precision farming, boost productivity, and make agriculture more sustainable.",
      link: "/services/land-evaluation-soil-testing",
    },
    {
      name: "Soil Secrets",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263289/utilities/greenyield/1678179388741_ce9trh.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359819/utilities/greenyield/search_ldz3iw.png",
      intro1: "Researching Soil Health for the Future",
      intro2:
        " Through our in-house research and experiments, we are pioneering breakthroughs in soil health, fertility restoration, and sustainable farming practices to ensure a thriving agricultural future.",
      link: "/services/technology-driven-farming",
    },
    {
      name: "Sprouting Futures",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263291/utilities/greenyield/1721805734055_fcgsyd.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        "We’re transforming the lives of children in rural areas by creating agro-education programs, offering hands-on learning opportunities, and providing essential resources for their growth and nourishment.",
      link: "/services/crop-selection-cultivation",
    },
  ];


  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[50px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col gap-[8px] xl:gap-[24px]  items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header2 className="text-center">
            Empowering <span className="text-primary">Change</span> Across
            Communities
          </Header2>
          <Paragraph1 className="max-w-[883px] text-center">
            From driving innovation in agriculture to fostering sustainable
            development, our projects are shaping brighter futures. Together,
            we’re creating solutions that empower lives, inspire progress, and
            build thriving communities for generations to come.
          </Paragraph1>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 pb-[50px]  rounded-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white shadow-even rounded-lg"
              data-aos="fade-up"
            >
              <div className="flex items-start gap-4 p-6 min-h-[120px]">
                <img
                  src={service.icon_url}
                  alt={`${service.name} icon`}
                  className=" h-[50px] w-[50px] "
                />
                <div>
                  <Header4>{service.name}</Header4>
                  <Paragraph1>{service.intro1} </Paragraph1>
                </div>
              </div>

              <div className=" flex w-full h-[200px]">
                <img
                  src={service.cover_image}
                  alt={service.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col">
                <Paragraph1 className="mb-6">
                  {service.intro2}
                  <span>
                    <a
                      href="/"
                      className=" text-primary outline-none font-bold hover:underline"
                    >
                      {" "}
                      Learn more
                    </a>
                  </span>
                </Paragraph1>
                <Button
                  text="Send a Donation"
                  href={service.link}
                  isLink={true}
                  border="border-2 border-primary"
                  additionalClasses="border-primary xl:w-fit w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;
