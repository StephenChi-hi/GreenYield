import React from "react";
import localFont from "next/font/local";

const body_Font_Medium = localFont({
  src: "../app/fonts/Nunito/Nunito-Medium.ttf",
});

const body_Font_Regular = localFont({
  src: "../app/fonts/Nunito/Nunito-Regular.ttf",
});

const body_Font_Light = localFont({
  src: "../app/fonts/Nunito/Nunito-Light.ttf",
});

const body_Font_Bold = localFont({
  src: "../app/fonts/Nunito/Nunito-Bold.ttf",
});

// Header1 Component
export const Header1: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h1
    className={`text-[24px] sm:text-[42px] ${body_Font_Bold.className} ${className}`}
  >
    {children}
  </h1>
);

// Header2 Component
export const Header2: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h2
    className={`text-[20px] sm:text-[28px] ${body_Font_Bold.className} ${className}`}
  >
    {children}
  </h2>
);

// Header3 Component
export const Header3: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h3
    className={`text-[18px] sm:text-[24px] ${body_Font_Medium.className} ${className}`}
  >
    {children}
  </h3>
);

// Header4 Component
export const Header4: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h4
    className={`text-[16px] sm:text-[20px] ${body_Font_Medium.className} ${className}`}
  >
    {children}
  </h4>
);

// Paragraph1 Component
export const Paragraph1: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p
    className={`text-[14px] sm:text-[16px] ${body_Font_Regular.className} ${className}`}
  >
    {children}
  </p>
);

// Paragraph2 Component
export const Paragraph2: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p
    className={`text-[12px] sm:text-[14px] ${body_Font_Light.className} ${className}`}
  >
    {children}
  </p>
);
