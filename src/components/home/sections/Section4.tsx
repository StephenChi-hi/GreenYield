"use client";

import Button from "@/components/Button";
import { Header2, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import RandomFaces from "./others/RandomFaces";

function Section4() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const services = [
    {
      name: "Land Evaluation and Soil Testing",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263313/utilities/greenyield/graduation-cylinder-for-soil-test_whpews.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261272/utilities/greenyield/test-tube_mcahll.png",
      intro1: "Assess the potential of your land for optimal farming.",
      intro2:
        "Comprehensive testing to enhance soil fertility and productivity.",
      link: "/services/land-evaluation-soil-testing",
    },
    {
      name: "Crop Selection and Cultivation",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263291/utilities/greenyield/1721805734055_fcgsyd.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/agriculture_sjbniy.png",
      intro1: "Choose the right crops for your land and market.",
      intro2: "Expert guidance for profitable and sustainable cultivation.",
      link: "/services/crop-selection-cultivation",
    },

    {
      name: "Technology-Driven Farming Solutions",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263289/utilities/greenyield/1678179388741_ce9trh.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/smartphone_jnlpvl.png",
      intro1: "Harness the power of IoT, AI, and drones for modern farming.",
      intro2: "Boost efficiency and precision with cutting-edge tech.",
      link: "/services/technology-driven-farming",
    },
    {
      name: "Harvesting and Post-Harvest Management",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263291/utilities/greenyield/33_postharvest-e28c70a2_giu7dm.png",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261272/utilities/greenyield/harvest_tzxtj3.png",
      intro1: "Streamline your harvesting process with expert services.",
      intro2:
        "From field to market, we ensure minimal waste and maximum value.",
      link: "/services/harvesting-management",
    },
    {
      name: "Revenue Sharing and Transparent Payments",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263287/utilities/greenyield/Agriculture-finance-in-Kenya_cq10do.webp",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/sustainability_o3ibma.png",
      intro1: "Earn fairly with clear and reliable payment systems.",
      intro2: "Our models ensure mutual growth and profitability.",
      link: "/services/revenue-sharing",
    },
    {
      name: "Distribution of Produce",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733264021/utilities/greenyield/agricultural-transport-g3enterprises_jmqfcr.png",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/logistics_z7n3wf.png",
      intro1: "Bring your harvest to the market with ease.",
      intro2: "Comprehensive logistics and sales solutions for your produce.",
      link: "/services/distribution-sale",
    },
    {
      name: "Sustainable and Eco-Friendly Farming Practices",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263305/utilities/greenyield/Sarah_Benoit_Delbecq_Indiana_1_qwqvxt.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733242062/utilities/greenyield/save-the-planet_vkyull.png",
      intro1: "Farming practices that nurture the earth and your yields.",
      intro2: "Adopt methods that align with global sustainability goals.",
      link: "/services/sustainable-farming",
    },
    {
      name: "Greenhouse Installation",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263293/utilities/greenyield/19-_DSC5138_1_vxxvzw.webp",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/eco-house_m6lvui.png",
      intro1: "Innovative solutions for climate-controlled farming.",
      intro2:
        "Maximize your yield with professionally installed greenhouses tailored to your needs.",
      link: "/services/greenhouse-installation",
    },
    {
      name: "Online Market for Agricultural Tools, Products, and Chemicals",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263305/utilities/greenyield/fresh-market-produce_r76zrj.png",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/online-shopping_lldk40.png",
      intro1: "Access everything you need in one place.",
      intro2: "Explore a range of high-quality tools and products online.",
      link: "/services/online-market",
    },
    {
      name: "Customer and Landowner Support Services",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263292/utilities/greenyield/Customer-Support-Outsourcing-Department.png_ojam6b.webp",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/customer-service_ugwksd.png",
      intro1: "Dedicated assistance for landowners and customers.",
      intro2: "Our team is here to ensure a seamless experience.",
      link: "/services/support-services",
    },
    {
      name: "    Training Programs and Educational Recourses",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263286/utilities/greenyield/Farmers-Producer-Organization-FPO-trainng-programme-1_ljsbg3.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/tractor_o6j1by.png",
      intro1: "Enhance your skills with our comprehensive training.",
      intro2:
        "Stay ahead with the latest agricultural techniques and insights.",
      link: "/services/training-programs",
    },
    {
      name: "Market Access and Partnerships",
      cover_image:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733263287/utilities/greenyield/shutterstock_597047831_rckfbf.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261271/utilities/greenyield/team_onflvu.png",
      intro1: "Expand your reach with reliable market connections.",
      intro2: "We help you form valuable partnerships for success.",
      link: "/services/market-access",
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
            Where Your <span className=" text-primary">Agricultural Needs</span>{" "}
            Are Met
          </Header2>
          <Paragraph1 className=" max-w-[883px] text-center ">
            From cultivating your land to providing top-quality tools, products,
            and solutions, we’re here to support every aspect of your
            agricultural journey—driving growth, sustainability, and shared
            success.
          </Paragraph1>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 pb-[50px]  rounded-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white shadow-even rounded-lg"
              data-aos="fade-up"
            >
              <div className="flex items-start gap-4 p-6 min-h-[150px]">
                <img
                  src={service.icon_url}
                  alt={`${service.name} icon`}
                  className=" h-[50px] w-[50px] "
                />
                <div>
                  <Header4>{service.name}</Header4>
                  <Paragraph1>{service.intro1}</Paragraph1>
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
                <Paragraph1 className="mb-6">{service.intro2}</Paragraph1>
                <Button
                  text="Learn More"
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

export default Section4;
