"use client";

import { Header2, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section7() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const blogs = [
    {
      id: 1,
      link: "/blog/hydroponics-systems",
      title: "Recirculating vs Drain to Waste Hydroponics Systems",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipismassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      coverImage:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733274049/utilities/greenyield/two-young-asian-couple-farmers-working-in-vegetables-hydroponic-farm-with-happiness-_cski8y.jpg",
      date: "November 20, 2024",
    },
    {
      id: 2,
      link: "/blog/indoor-gardening-tips",
      title: "Top 10 Tips for Indoor Gardening Success",
      description:
        "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
      coverImage:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733274049/utilities/greenyield/fresh-vegetable-sell-in-wet-market_byxnbv.jpg",
      date: "November 18, 2024",
    },
    {
      id: 3,
      link: "/blog/vertical-farming",
      title: "Exploring the Future of Vertical Farming",
      description:
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.",
      coverImage:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733274049/utilities/greenyield/modern-hydroponic-greenhouse_tbtc5t.jpg",
      date: "November 15, 2024",
    },
    {
      id: 4,
      link: "/blog/sustainable-agriculture",
      title: "The Importance of Sustainable Agriculture",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu.",
      coverImage:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1733274049/utilities/greenyield/close-up-view-hands-of-farmer-picking-lettuce-in-hydroponic-greenhouse-_my5rlh.jpg",
      date: "November 10, 2024",
    },
  ];

  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] xl:pb-[100px]  text-p_black">
        {" "}
        <div
          className=" flex xl:gap-[14px] flex-col items-center w-full mb-[24px] xl:mb-[24px]"
          data-aos="fade-up"
        >
          <Header2>Latest News & Article</Header2>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Stay informed with the latest trends, tips, and innovations in
            agriculture and sustainable farming.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <div className=" rounded-lg overflow-hidden shadow-lg" key={blog.id}>
              <div className="h-[250px] w-full flex">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:h-[400px] space-y-4">
                <Link href={blog.link}>
                  <Header3 className=" text-primary ">{blog.title}</Header3>
                </Link>
                <p className=" text-gray-400">{blog.date}</p>
                <Paragraph1>{blog.description}</Paragraph1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section7;
