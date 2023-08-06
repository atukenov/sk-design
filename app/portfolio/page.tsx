"use client";
import React, { useEffect, useState } from "react";
import Logo from "../components/LogoContent";
import UI from "../components/UIContent";
import Interiors from "../components/InteriorsContent";

const NavLinks = [
  {
    href: "logo",
    title: "LOGO",
    className: "",
    content: <Logo />,
  },
  {
    href: "ui",
    title: "UI DESIGN",
    className: "",
    content: <UI />,
  },
  {
    href: "interiors",
    title: "INTERIORS",
    className: "",
    content: <Interiors />,
  },
];

const Portfolio = () => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    // router.push(`portfolio/${NavLinks[current].href}`);
  }, [current]);

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
      setCurrent((prev) => (prev < 2 ? prev + 1 : prev));
    }
    if (isRightSwipe) {
      setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const handleArrow = (move: number) => {
    console.log(current + move);
    if (current + move >= 0 && current + move <= 2)
      setCurrent((prev) => prev + move);
  };

  return (
    <>
      <div
        className="flex pb-2 justify-evenly"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div onClick={() => handleArrow(-1)}>{current !== 0 && "◀"}</div>
        <div>{NavLinks[current].title}</div>
        <div onClick={() => handleArrow(1)}>{current !== 2 && "▶"}</div>
      </div>
      {NavLinks[current].content}
    </>
  );
};

export default Portfolio;
