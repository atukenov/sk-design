import Image from "next/image";
import React from "react";

const LogoItems = [
  {
    project: 'Проект "Lime Kinoroom"',
    desc: "Комната кино",
    theme: "",
    src: "/img/logo/limeKinoroom.mp4",
    type: "video",
  },
  {
    project: 'Проект "Line Z"',
    desc: "Логотип для собственного сайта ",
    theme: "",
    src: "/img/logo/linez.png",
    type: "img",
  },
  {
    project: 'Проект "Simply"',
    desc: "Логотип для карты Simply от Beeline",
    theme: "Тема: цитаты известных личностей Казахстана",
    src: "/img/logo/simply.jpg",
    type: "img",
  },
];

const LogoContent = () => {
  return (
    <div className="flex flex-col">
      {LogoItems.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.project}</p>
            <p>{item.desc}</p>
            <p>{item.theme}</p>
            {item.type === "video" ? (
              <video controls width="600" height="400" autoPlay>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image src={item.src} alt="image" width={200} height={200} />
            )}
            <hr className="my-3" />
          </div>
        );
      })}
    </div>
  );
};

export default LogoContent;
