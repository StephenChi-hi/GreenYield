import { useState, useEffect } from "react";
import { Paragraph1 } from "@/components/Text";
import Link from "next/link";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <div className="relative">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <Paragraph1 className="hover:font-bold">Services</Paragraph1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-[550px] p-4 gap-4 top-11 grid grid-cols-2 bg-white rounded-lg shadow-md">
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Land evaluation and soil testing
            </Paragraph1>
          </Link>

          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Crop selection and cultivation
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Technology-driven farming solutions (IoT, AI, drones){" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Harvesting and post-harvest management{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Revenue sharing and transparent payments{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Distribution and sale of produce{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Sustainable and eco-friendly farming practices{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Real-time land monitoring and reporting{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Online Market for agricultural tools, products, and chemicals{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Customer and landowner support services
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Training programs{" "}
            </Paragraph1>
          </Link>
          <Link href="/">
            <Paragraph1 className="cursor-pointer hover:text-primary">
              Market access and partnerships{" "}
            </Paragraph1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Services;
