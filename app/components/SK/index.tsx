"use client";
import React, { useEffect, useState } from "react";
import "./styles.css";

const slides = [
  {
    title: "pervoye",
    bg: "bg-red-300 w-[300px] h-[300px] rotate-[5deg]",
  },
  {
    title: "vtoroe",
    bg: "bg-blue-300  w-[300px] h-[300px] -rotate-[10deg]",
  },
  {
    title: "tretye",
    bg: "bg-green-300  w-[300px] h-[300px] rotate-[15deg]",
  },
  {
    title: "chetvertoe",
    bg: "bg-orange-300  w-[300px] h-[300px] -rotate-[20deg]",
  },
];

const SK = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [wheel, setWheel] = useState<number>(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 5;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setWheel(wheel + 100 > 300 ? 300 : wheel + 100);
    }
    if (isRightSwipe) {
      setWheel(wheel - 100 < 0 ? 0 : wheel - 100);
    }
    console.log(wheel);
  };

  useEffect(() => {}, [wheel]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const step = 5;
    const newWheel = e.deltaY < 0 ? wheel - step : wheel + step;
    setWheel(newWheel < 0 ? 0 : newWheel > 350 ? 350 : newWheel);
  };

  const renderStyle = (index: number) => {
    if (index > wheel / 100)
      return { right: `-${1500 * index - wheel * 17}px` };
    return {};
  };

  return (
    <div
      className="flex flex-wrap flex-1"
      onWheel={handleScroll}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 z-0">
        <div className="flex flex-col justify-center items-center w-full h-full  relative">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`absolute ${slide.bg} ${renderStyle(index)}`}
                style={renderStyle(index)}
              >
                {slide.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end items-end w-full lg:w-2/3 relative -z-10">
        <div className="sk-font-s absolute text-[30rem] -bottom-[225px] right-[100px] sm:text-[45rem] sm:-bottom-[350px] sm:right-[175px] xl:text-[85rem] xl:-bottom-[650px] xl:right-[300px]">
          S
        </div>
        <div className="sk-font-k absolute text-[15rem] -bottom-[125px] -right-[25px] sm:text-[25rem] sm:-bottom-[200px] sm:-right-[50px] xl:text-[45rem] xl:-bottom-[350px] xl:-right-[100px]">
          K
        </div>
      </div>
    </div>
  );
};

export default SK;
