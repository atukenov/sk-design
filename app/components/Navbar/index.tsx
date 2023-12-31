"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useWindowSize } from "@/utils/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

interface Props {
  home?: boolean;
}

const NavLinks = [
  {
    href: "/",
    title: "HOME",
    className: "",
  },
  {
    href: "/about",
    title: "ABOUT ME",
    className: "",
  },
  {
    href: "/experience",
    title: "WORK EXPERIENCE",
    className: "",
  },
  {
    href: "/portfolio",
    title: "PORTFOLIO",
    className: "",
  },
];

const Navbar = ({ home }: Props) => {
  const pathname = usePathname();

  const router = useRouter();

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const [current, setCurrent] = useState<number>(0);

  const isMobile = useWindowSize();

  useEffect(() => {
    router.push(`${NavLinks[current].href}`);
  }, [current, router]);

  useEffect(() => {
    setCurrent(NavLinks.findIndex((t) => pathname === t.href));
  }, [pathname]);

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
      setCurrent((prev) => (prev < 3 ? prev + 1 : prev));
    }
    if (isRightSwipe) {
      setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const handleArrow = (move: number) => {
    console.log(current + move);
    if (current + move >= 0 && current + move <= 3)
      setCurrent((prev) => prev + move);
  };

  return (
    <>
      {home && (
        <div className="flex flex-col gap-1 items-center z-10">
          {NavLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              link.href !== "/" && (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-bold"
                >
                  {link.title}
                </Link>
              )
            );
          })}
        </div>
      )}
      {pathname !== NavLinks[0].href && (
        <>
          <div
            className="flex pb-2 justify-evenly"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div onClick={() => handleArrow(-1)}>
              {current !== 0 && <FontAwesomeIcon icon={faLessThan} />}
            </div>
            <div>{NavLinks[current].title}</div>
            <div onClick={() => handleArrow(1)}>
              {current !== 3 && <FontAwesomeIcon icon={faGreaterThan} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

// className={`hover:text-[#2B2C30] ${
//   isActive ? "text-[#2B2C30]" : "text-gray-400"
// }`}

{
  /* {isMobile ? (
        <div
          className="flex pb-2 border-b-[1px] border-b-[#2B2C30] justify-evenly"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div onClick={() => handleArrow(-1)}>{current !== 0 && "◀"}</div>
          <div>{NavLinks[current].title}</div>
          <div onClick={() => handleArrow(1)}>{current !== 3 && "▶"}</div>
        </div>
      ) : ( */
}
