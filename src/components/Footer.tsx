"use client";

import React from "react";
import {
  Header1,
  Header3,
  Paragraph1,
  Paragraph2,
} from "./Text";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }

  return (
    <div
      className={
        ["/contact-us", "/privacy-policy", "/terms-of-service"].includes(
          pathname
        )
          ? "bg-bg_gray sm:py-[100px]-"
          : " bg-white sm:py-[100px]-"
      }
    >
      <div className="  bg-p_black  ">
        <div className=" container1 py-[32px] sm:py-[40px] ">
          {/* desktop */}
          <div className="sm:flex hidden items-start justify-between mb-[30px]">
            <div className="w-[200px]- relative">
              <div className=" flex gap-1">
                <img src="/logo.png" alt="logo" className=" h-[40px]" />
                <Header3 className=" font-bold text-white">greenyield</Header3>
              </div>{" "}
              <Paragraph2 className=" text-white py-2">
                Cultivating Prosperity, Nourishing the World.
              </Paragraph2>
              <div className=" sm:flex justify-center- items-center hidden py-4">
                <div className=" py-2 px-4 rounded-lg bg-white flex justify-center items-center gap-2 flex-col">
                  <p className=" text-[12px]  ">
                    {" "}
                    Payments secuered by{" "}
                    <span className=" font-bold">Flutterwave</span>{" "}
                  </p>
                  <div className=" flex gap-4 flex-col- items-center">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dtipo8fg3/image/upload/v1732661439/image-removebg-preview_6_sygmis.png"
                      alt=""
                      className=" w-[20px] h-[20px]"
                    />{" "}
                    <img
                      src="https://res.cloudinary.com/dtipo8fg3/image/upload/v1732660748/image-removebg-preview_5_doqrew.png"
                      alt=""
                      className=" w-[150px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <div>
                <Paragraph1
                  className={
                    pathname === "/"
                      ? "text-[#ECECEC] font-bold mb-2 "
                      : " text-[#ECECEC]  "
                  }
                >
                  Services
                </Paragraph1>
              </div>

              <div className=" grid gap-2 grid-cols- -sm:grid-cols-2">
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Land Evaluation and Soil Testing
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Crop Selection and Cultivation
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Technology-Driven Farming Solutions
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Harvesting and Post-Harvest Management
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Revenue Sharing and Transparent Payments
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Distribution of Produce
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Sustainable and Eco-Friendly Farming Practices
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Greenhouse Installation
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Online Market for Agricultural Tools, Products, and
                    Chemicals
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Customer and Landowner Support Services
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Training Programs and Educational Recourses
                  </Paragraph2>
                </Link>{" "}
                <Link href="/">
                  <Paragraph2
                    className={
                      pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                    }
                  >
                    Market Access and Partnerships
                  </Paragraph2>
                </Link>{" "}
              </div>

              <div className=""></div>
            </div>

            <div className=" flex flex-col gap-2">
              <Paragraph1
                className={
                  pathname === "/"
                    ? "text-[#ECECEC] font-bold  "
                    : " text-[#ECECEC]  "
                }
              >
                Company
              </Paragraph1>
              <Link href="/">
                <Paragraph2
                  className={
                    pathname === "/" ? "text-[#ECECEC]  " : " text-[#ECECEC] "
                  }
                >
                  Home
                </Paragraph2>
              </Link>{" "}
              <Link href="/about-us">
                {" "}
                <Paragraph2
                  className={
                    pathname === "/about-us"
                      ? "text-[#ECECEC]  "
                      : " text-[#ECECEC] "
                  }
                >
                  About
                </Paragraph2>
              </Link>
              <Link href="/products">
                {" "}
                <Paragraph2
                  className={
                    pathname === "/products"
                      ? "text-[#ECECEC]  "
                      : " text-[#ECECEC] "
                  }
                >
                  Shop
                </Paragraph2>
              </Link>
              <Link href="/blogs">
                {" "}
                <Paragraph2
                  className={
                    pathname === "/blogs"
                      ? "text-[#ECECEC]  "
                      : " text-[#ECECEC] "
                  }
                >
                  Blog
                </Paragraph2>
              </Link>
              <Link href="/contact-us">
                {" "}
                <Paragraph2
                  className={
                    pathname === "/contact-us"
                      ? "text-[#ECECEC]  "
                      : " text-[#ECECEC] "
                  }
                >
                  Contact us
                </Paragraph2>
              </Link>
            </div>
            <div className=" flex flex-col py-4 gap-2 items-center- justify-center-">
              <div className=" flex gap-4 items-center mb-2">
                <Link
                  href="https://www.instagram.com/grandiosegrin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676533/utilities/templates/instagram_2_ujmgac.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676725/utilities/templates/facebook-app-symbol_x2whit.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link
                  href="https://www.x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729675779/utilities/templates/twitter_3_sihd1i.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </Link>
              </div>

              <div className=" flex items-center gap-2 text-[#ECECEC] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <Paragraph2> grandiosegrin@gmail.com</Paragraph2>
              </div>
              <div className=" flex items-center gap-2 text-[#ECECEC] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <Paragraph2> +234 707 832 8640</Paragraph2>
              </div>
            </div>
          </div>

          {/* mobile  */}
          <div className=" mb-[24px] sm:hidden sm:mb-[110px]">
            <div className=" space-y-[24px] mb-[24px] ">
              {" "}
              <Link href="/">
                {" "}
                <Paragraph1 className=" text-[#ECECEC]  ">Home </Paragraph1>
              </Link>
              <Link href="/about-us">
                {" "}
                <Paragraph2 className=" text-[#ECECEC]  ">About </Paragraph2>
              </Link>
              <Link href="/products">
                {" "}
                <Paragraph2 className=" text-[#ECECEC] ">Shop</Paragraph2>
              </Link>
              <Link href="/blog">
                {" "}
                <Paragraph2 className=" text-[#ECECEC] ">Blog</Paragraph2>
              </Link>
              <Link href="/contact-us">
                {" "}
                <Paragraph2 className=" text-[#ECECEC] ">Contact us</Paragraph2>
              </Link>
              <div className=" flex flex-col p-4- gap-2 items-center- justify-center-">
                <div className=" flex gap-4 items-center mb-4">
                  <Link href="www.instagram.com/grandiosegrin">
                    <img
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676533/utilities/templates/instagram_2_ujmgac.png"
                      alt="instagram"
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676725/utilities/templates/facebook-app-symbol_x2whit.png"
                      alt="facebook"
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729675779/utilities/templates/twitter_3_sihd1i.png"
                      alt=""
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                </div>
                <div className=" flex items-center gap-2 text-[#ECECEC] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <Paragraph2> grandiosegrin@gmail.com</Paragraph2>
                </div>
                <div className=" flex items-center gap-2 text-[#ECECEC] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <Paragraph2> +234 707 832 8640</Paragraph2>
                </div>
              </div>
            </div>

            <div className="col-span-1 order-2 sm:order-1">
              {" "}
              <div className=" flex gap-1 flex-col- items-center">
                <img src="/logo.png" alt="logo" className=" h-[50px]" />
                <Header1 className=" font-bold text-white">GreenYield</Header1>
              </div>{" "}
            </div>
          </div>

          <div className=" border-t pt-[24px] sm:pt-[32px] flex flex-wrap justify-between">
            <div className=" flex justify-center items-center sm:hidden py-4">
              <div className=" py-2 px-4 rounded-lg bg-white flex justify-center items-center gap-2 flex-col">
                <p className=" text-[12px]  ">
                  {" "}
                  Payments secuered by{" "}
                  <span className=" font-bold">Flutterwave</span>{" "}
                </p>
                <div className=" flex gap-4 flex-col- items-center">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dtipo8fg3/image/upload/v1732661439/image-removebg-preview_6_sygmis.png"
                    alt=""
                    className=" w-[20px] h-[20px]"
                  />{" "}
                  <img
                    src="https://res.cloudinary.com/dtipo8fg3/image/upload/v1732660748/image-removebg-preview_5_doqrew.png"
                    alt=""
                    className=" w-[150px]"
                  />
                </div>
              </div>
            </div>
            <Paragraph2 className=" text-[14px] text-[#ECECEC] ">
              © 2024 GreenYield Ltd. All rights reserved.
            </Paragraph2>
            <div className="flex flex-wrap gap-[24px] items-center">
              <Link href="/privacy-policy" className="">
                {" "}
                <Paragraph2 className=" text-[14px] text-[#ECECEC] underline ">
                  Privacy Policy
                </Paragraph2>
              </Link>

              <Link href="/terms-of-service">
                <Paragraph2 className=" text-[14px] text-[#ECECEC] underline">
                  Terms of Service{" "}
                </Paragraph2>
              </Link>

              {/* <Link href="/">
                {" "}
                <Paragraph2 className=" text-[#ECECEC] underline">
                  Cookies Settings{" "}
                </Paragraph2>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
