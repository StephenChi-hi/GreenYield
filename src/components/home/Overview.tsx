"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import Section6 from "./sections/Section6";
import NewsLetter from "./sections/NewsLetter";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section7 from "./sections/Section7";

interface Product {
  id: string;
  name: string;
  currentPrice: number;
  isFeatured: boolean;
  createdAt: Date;
  productImageURL1: string;
  category: string;
  selectedCategory: any;
  isTrending: any;
}

function Overview() {
  

 

  return (
    <div>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />

      <NewsLetter />
      <Section6 />
    </div>
  );
}

export default Overview;
