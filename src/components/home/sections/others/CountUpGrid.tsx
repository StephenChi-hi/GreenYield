import { Header1, Header4 } from "@/components/Text";
import React, { useEffect, useRef, useState } from "react";

const CountUpGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const targetValues = [
    { label: "Communities", value: 27 },
    { label: "Hectares Field", value: 2.6, unit: "M" },
    { label: "Happy Users", value: 87, unit: "K" },
    { label: "Partnerships ", value: 50 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust as needed to trigger earlier/later
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  const animateCount = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = start + progress * (end - start);
      callback(parseFloat(value.toFixed(1))); // Adjust precision (e.g., 0.1)

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-2 sm:grid-cols-4 justify-center items-center p-8 rounded-lg shadow-lg"
    >
      {targetValues.map((item, index) => (
        <Counter
          key={index}
          value={item.value}
          label={item.label}
          unit={item.unit}
          isVisible={isVisible}
          index={index}
          length={targetValues.length}
        />
      ))}
    </div>
  );
};

const Counter = ({
  value,
  label,
  unit = "",
  isVisible,
  index,
  length,
}: {
  value: number;
  label: string;
  unit?: string;
  isVisible: boolean;
  index: number;
  length: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      animateCount(0, value, 2000, setCount); // Count up in 2 seconds
    }
  }, [isVisible, value]);

  return (
    <div
      className={`flex justify-center items-center flex-col ${
        index !== length - 1 ? "border-r" : ""
      }`}
    >
      <Header1 className="text-primary text-2xl font-bold">
        {count}
        {unit}+
      </Header1>
      <Header4>{label}</Header4>
    </div>
  );
};

const animateCount = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  let startTimestamp: number | null = null;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = start + progress * (end - start);
    callback(parseFloat(value.toFixed(1))); // Adjust precision

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default CountUpGrid;
