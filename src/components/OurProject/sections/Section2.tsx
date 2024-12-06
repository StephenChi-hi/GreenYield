"use client";

import Button from "@/components/Button";
import { Header2, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section2() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const services = [
    {
      name: "Flow for Growth: Advanced Irrigation Systems ",
      cover_image:
        "https://cdn.britannica.com/80/102480-050-98F06900/Lettuce-field-irrigation-sprinklers.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733261272/utilities/greenyield/test-tube_mcahll.png",
      intro1: " Innovating Smart Farming Solutions",
      intro2:
        "Continual expansion of modern irrigation infrastructure across regions, ensuring equitable water distribution for farming efficiency.",
      link: "/services/land-evaluation-soil-testing",
    },
    {
      name: " Harvest Haven: Agro-Processing Facility Development",
      cover_image:
        "https://www.thehabarinetwork.com/wp-content/uploads/2024/09/agroprocessing-1000x600.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359819/utilities/greenyield/search_ldz3iw.png",
      intro1: "Researching Soil Health for the Future",
      intro2:
        " Ongoing construction of agro-processing hubs to streamline post-harvest handling and reduce food wastage.",
      link: "/services/technology-driven-farming",
    },
    {
      name: "Cold Comfort: Storage Solutions for Perishables",
      cover_image:
        "https://emmarappliances.com/wp-content/uploads/2024/06/Cold-Storage-Services-for-Perishable-Goods.jpeg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Scaling up the network of cold storage units to support larger farmer communities and prevent spoilage.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Solar Power for Sustainable Growth",
      cover_image:
        "https://offgridengineering.co.za/wp-content/uploads/2024/09/image.png",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Ongoing installation of solar-powered energy systems on farms to achieve net-zero emissions by 2026.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "AgriHubs: Centers for Training and Collaboration",
      cover_image:
        "https://www.canr.msu.edu/organic_farmer_training_program/uploads/images/51232933067_cdabf148c9_k.jpg?language_id=1",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Continuing development of community hubs offering advanced training, resources, and partnerships for modern agriculture.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Seeds of Sustainability: GreenYield Reforestation Drive",
      cover_image:
        "https://eos.com/wp-content/uploads/2023/07/afforestation-with-coniferous-trees.jpg.webp",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " An active initiative planting trees and expanding forest coverage to combat deforestation and support biodiversity.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Farm-to-Table: Community Food Donation Initiative",
      cover_image:
        "https://www.foodbanking.org/wp-content/uploads/2024/05/53547010695_7c5b617b89_c.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " On track to distribute surplus produce regularly, ensuring that food reaches underserved communities every harvest season.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Empowering the Next Generation: Youth in Agriculture",
      cover_image:
        "https://rootcapital.org/wp-content/uploads/2024/02/Intern-Pierre-Ndabazi-of-Cocahu-trains-coffee-farmers-on-Coffee-Pruning.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Ongoing workshops, internships, and scholarships to encourage youth participation in agricultural innovation.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Equal Growth: Women in Agriculture Initiative",
      cover_image:
        "https://media.licdn.com/dms/image/v2/D4D12AQH8TCa8myTkSw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1709646484420?e=2147483647&v=beta&t=wyEfPRoKoP7SkwuE5TvK5DRIPYLgf1u9ZyeCtd8DBC4",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Expanding opportunities for women entrepreneurs by introducing leadership programs and seed grants.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Fair Farms: Crop Insurance Program",
      cover_image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE5cv7aVWdN5UJawKgoL8AMgymXp8_LIqwnxtVA837nDwDNngh8MaGDYTduKrp0QtJbqQKmIXhdyYrFJphbiEHRA62syy2AFtrqOJUs-L4n4UsKG3BaYVGTcyYjMj66onkMAROVXJRChxB/s1600/AGRICULTURE-INSURANCE.png",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Continuously onboarding farmers to provide accessible insurance options, ensuring financial security for more landowners.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Farming 4.0: Smart Agriculture Education",
      cover_image:
        "https://www.umontpellier.fr/wp-content/uploads/2022/10/adobestock_441036255.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1:
        "Currently delivering ongoing training on emerging technologies like IoT, AI, and drone management for precision farming.",
      intro2: " their growth and nourishment.",
      link: "/services/crop-selection-cultivation",
    },
    {
      name: "Roots of Collaboration: Farmer Market Access Program",
      cover_image:
        "https://farmingfarmersfarms.com/wp-content/uploads/2023/12/iStock-1421231403-e1666081905766-768x512-1.jpg",
      icon_url:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733359818/utilities/greenyield/adoption_efwpoa.png",
      intro1: "Nurturing Children Through Agro-Education",
      intro2:
        " Currently connecting more farmers to markets, improving direct sales and reducing reliance on middlemen.",
      link: "/services/crop-selection-cultivation",
    },
  ];


  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[50px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:flex-row gap-[8px] xl:gap-[24px]  items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header2 className="text-center-">
            Shaping <span className="text-primary">Tomorrow</span> Through
            Impactful Projects
          </Header2>
          <Paragraph1 className="max-w-[783px] text-center-">
            From revolutionizing agricultural practices to building sustainable
            infrastructures and fostering community empowerment, our ongoing
            projects are driving meaningful change. 
          </Paragraph1>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 pb-[50px]  rounded-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white overflow-hidden shadow-even rounded-lg"
              data-aos="fade-up"
            >
              <div className="flex- hidden items-start gap-4 p-6 min-h-[120px]">
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

              <div className="p-6 flex flex-col space-y-2 ">
                <Header4>{service.name}</Header4>

                <Paragraph1 className="pb-6">{service.intro2}</Paragraph1>
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

export default Section2;
