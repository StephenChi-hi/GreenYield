"use client"

import React from "react";
import { Paragraph1, Paragraph2 } from "../Text";
import SearchBar from "./SearchBar";

function TopBar() {
  return (
    <div className=" bg-p_black text-white ">
      <div className=" py-2 text-white container1 flex items-center justify-between">
        <div className=" hidden">
          <Paragraph1>Market</Paragraph1>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className=" flex gap-6 items-center">
          <Paragraph1>Help</Paragraph1>
          <div
            // onClick={() => toggleCart()}
            className=" border rounded-lg p-2 cursor-pointer flex relative "
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:scale-110 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div className=" absolute -top-1 -right-4 bg-primary p-1 px-2 text-white text-[10px] rounded-full">
              {/* {cartCount > 0 ? cartCount : 0} */}0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
