"use client";

import Button from "@/components/Button";
import { Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React, { useState } from "react";
import AOS from "aos";


function Section5() {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const toggleParagraphVisibility = (index: any) => {
    setOpenedQuestionIndex(openedQuestionIndex === index ? null : index);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  // Array of FAQ items
 const faqs = [
   {
     id: 1,
     question: "Q. What services does your platform offer?",
     answer:
       "We offer a comprehensive range of agro-services, including land evaluation, crop selection, technology-driven farming solutions, harvesting support, and more. Our goal is to empower individuals and communities in the agricultural sector.",
   },
   {
     id: 2,
     question: "Q. How can I get started with your services?",
     answer:
       "Getting started is easy! Explore our services online, choose the one that fits your needs, and contact our team for guidance. We’re here to support you every step of the way.",
   },
   {
     id: 3,
     question: "Q. Do you assist with land evaluation and soil testing?",
     answer:
       "Absolutely! We provide professional land evaluation and soil testing services to ensure your land is suitable for cultivation and to help optimize your agricultural output.",
   },
   {
     id: 4,
     question: "Q. How do I access your educational resources?",
     answer:
       "Our educational resources, including courses, videos, and e-books, are available on our platform. Simply visit the 'Learn & Grow' section to explore and enhance your agricultural knowledge.",
   },
   {
     id: 5,
     question: "Q. Can you help me sell my agricultural produce?",
     answer:
       "Yes, we support the distribution and sale of produce through our extensive network and online marketplace. Our goal is to connect you to the right buyers and maximize your profits.",
   },
   {
     id: 6,
     question: "Q. Do you provide technology-driven farming solutions?",
     answer:
       "Yes, we offer innovative solutions like IoT-based monitoring, AI recommendations, and drone-assisted farming to help optimize your processes and increase productivity.",
   },
 ];


  return (
    <div>
      <div className=" container1 py-[54px] xl:p5-[100px] text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Frequently Asked <span className=" text-primary">Questions</span>{" "}
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Find answers to all your questions about our agricultural services,
            resources, and innovative farming solutions.
          </Paragraph1>
        </div>
        <div
          className="flex-row items-center justify-center py-4 xl:py-[37px] bg-bg_gray rounded-lg "
          data-aos="flip-up"
        >
          {/* Mapping over FAQ items */}
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`w-full px-4 xl:px-[37px] pt-4 xl:py-[21px] ${
                index !== faqs.length - 1
                  ? "border-b-4 border-[#E4E4E7]"
                  : "xl:-mb-6"
              }`}
            >
              <div
                className="flex items-start   justify-between cursor-pointer"
                onClick={() => toggleParagraphVisibility(faq.id)}
              >
                <Header4 className="text-[18px] w-[250px] xl:w-full font-medium text-primary-50">
                  {faq.question}
                </Header4>
                <button
                  className=" flex justify-center items-center h-4 w-4  cursor-pointer"
                  onClick={() => toggleParagraphVisibility(faq.id)}
                >
                  <img
                    src={
                      openedQuestionIndex === faq.id
                        ? "/icons/dash.svg"
                        : "/icons/plus.svg"
                    }
                    alt=""
                    className=""
                    style={{
                      transform:
                        openedQuestionIndex === faq.id
                          ? "rotate(0deg)" // Keep it static or adjust if necessary
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              </div>
              <p
                className={`text-[12px] xl:text-[14px]- md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px]  overflow-hidden  transition-all pb-4 pt-4 max-w-[90%] duration-300 ${
                  openedQuestionIndex === faq.id ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{ opacity: openedQuestionIndex === faq.id ? "1" : "0" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
