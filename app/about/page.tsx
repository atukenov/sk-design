"use client";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => (prev = !prev));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-full pt-3">
        <div className="bg-white rounded-t-2xl px-5 py-1 md:w-[500px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-[30px] h-[30px] overflow-hidden">
                <Image
                  src="/img/about.jpg"
                  className="rounded-full h-[30px] w-[30px]"
                  alt="me"
                  width={500}
                  height={100}
                />
              </div>
              <div>lemonllime</div>
            </div>
            <div>...</div>
          </div>
        </div>
        <Image src="/img/about.jpg" alt="me" width={500} height={400} />
        <div className="bg-white rounded-b-2xl px-5 py-2 md:w-[500px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div onClick={handleLike}>
                {!like ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon
                    icon={faSolidHeart}
                    style={{ color: "#ff0000" }}
                  />
                )}
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col text-center text-sm">
          <p>
            Меня всю жизнь тянуло создавать, неважно, будь это что-то новое или
            чаще, компануя кусочки вдохновения, отобранные отовсюду.
          </p>
          <p>
            Именно это привело меня, строителя-инженера через дизайн интерьера к
            тому, чем я всегда занималась и бесплатно, создавая логотипы для
            знакомых или составляя брошюры и презентации для прежних
            работодателей.
          </p>
          <p>
            Я Салтанат, мне 25 лет и используя свои наработанные навыки с опытов
            менеджмента и введения проектов, готова погрузиться в творчество и
            стать частью вашей команды!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
