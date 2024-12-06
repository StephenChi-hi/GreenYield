"use client";

import React, { useState, useEffect } from "react";
import { Header3, Paragraph1, Paragraph2 } from "./Text";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Services from "./Services";

function NavBar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div>
        <div className="  w-full">
          <div className=" container1 flex justify-between py-2 w-full items-center">
            <div className=" flex gap-1">
              <img src="/logo.png" alt="logo" className=" h-[40px]" />
              <Header3 className=" font-bold">greenyield</Header3>
            </div>{" "}
            <div className="  gap-[48px] items-center hidden lg:flex">
              <Link href="/">
                <Paragraph1
                  className={
                    pathname === "/"
                      ? "text-primary font-bold "
                      : " hover:font-bold"
                  }
                >
                  Home
                </Paragraph1>
              </Link>
              <Link href="/about-us">
                {" "}
                <Paragraph1
                  className={
                    pathname === "/about-us"
                      ? "text-primary font-bold "
                      : " hover:font-bold "
                  }
                >
                  About us
                </Paragraph1>
              </Link>

              <Services />

              <Link href="/our-projects">
                {" "}
                <Paragraph1
                  className={
                    pathname === "/our-projects"
                      ? "text-primary font-bold "
                      : " hover:font-bold  "
                  }
                >
                  Projects{" "}
                </Paragraph1>
              </Link>

              <Link href="/market">
                {" "}
                <Paragraph1
                  className={
                    pathname === "/market"
                      ? "text-primary font-bold "
                      : " hover:font-bold "
                  }
                >
                  Market
                </Paragraph1>
              </Link>
              <Link href="/story">
                {" "}
                <Paragraph1
                  className={
                    pathname === "/story"
                      ? "text-primary font-bold "
                      : " hover:font-bold  "
                  }
                >
                  Learn & Grow{" "}
                </Paragraph1>
              </Link>
              <Link href="/story">
                {" "}
                <Paragraph1
                  className={
                    pathname === "/story"
                      ? "text-primary font-bold "
                      : " hover:font-bold "
                  }
                >
                  Contact us{" "}
                </Paragraph1>
              </Link>
            </div>
            <Button
              text="Dashboard "
              href="/apply"
              isLink={true}
              additionalClasses=" border-0  min-w-[152px]- hidden lg:block"
            />{" "}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <Image
                  height={2}
                  width={25}
                  src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                  alt="menu"
                  className=""
                />
              </button>
            </div>
          </div>

          {/* mobile dropdown */}
          {menuOpen && (
            <div className="p-[24px] flex flex-col justify-center items-center">
              <div className=" container1 flex flex-col w-full space-y-[24px] justify-between items-center">
                <Link href="/" onClick={toggleMenu}>
                  <Paragraph1
                    className={
                      pathname === "/" ? "text-primary font-bold " : " "
                    }
                  >
                    Home
                  </Paragraph1>
                </Link>
                <Link href="/about-us" onClick={toggleMenu}>
                  {" "}
                  <Paragraph1
                    className={
                      pathname === "/about-us"
                        ? "text-primary font-bold "
                        : "  "
                    }
                  >
                    About us
                  </Paragraph1>
                </Link>
                <Link href="/our-projects" onClick={toggleMenu}>
                  {" "}
                  <Paragraph1
                    className={
                      pathname === "/our-projects"
                        ? "text-primary font-bold "
                        : "  "
                    }
                  >
                    Projects
                  </Paragraph1>
                </Link>
                <Link href="/market" onClick={toggleMenu}>
                  {" "}
                  <Paragraph1
                    className={
                      pathname === "/market" ? "text-primary font-bold " : "  "
                    }
                  >
                    Market
                  </Paragraph1>
                </Link>
                <Link href="/story" onClick={toggleMenu}>
                  {" "}
                  <Paragraph1
                    className={
                      pathname === "/story" ? "text-primary font-bold " : "  "
                    }
                  >
                    <Link href="/story" onClick={toggleMenu}>
                      {" "}
                      <Paragraph1
                        className={
                          pathname === "/story"
                            ? "text-primary font-bold "
                            : "  "
                        }
                      >
                        Learn & Grow
                      </Paragraph1>
                    </Link>
                  </Paragraph1>
                </Link>
                <Link href="/story" onClick={toggleMenu}>
                  {" "}
                  <Paragraph1
                    className={
                      pathname === "/story" ? "text-primary font-bold " : "  "
                    }
                  >
                    Contact us
                  </Paragraph1>
                </Link>
                <Button
                  text="Dashboard"
                  href="/apply"
                  isLink={true}
                  onClick={toggleMenu}
                  additionalClasses=" border-0  sm:min-w-[152px] min-w-full "
                />{" "}
              </div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
