import Image from "next/image";
import React from "react";

const LogoItems = [
  {
    project: 'Проект "Lime Kinoroom"',
    desc: "Комната кино",
    theme: "",
    src: "",
  },
  {
    project: 'Проект "Line Z"',
    desc: "Логотип для собственного сайта ",
    theme: "",
    src: "",
  },
  {
    project: 'Проект "Simply"',
    desc: "Логотип для карты Simply от Beeline",
    theme: "Тема: цитаты известных личностей Казахстана",
    src: "",
  },
];

const LogoContent = () => {
  return (
    <>
      {LogoItems.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.project}</p>
            <p>{item.desc}</p>
            <p>{item.theme}</p>
            <Image src={item.src} alt="image" width={200} height={200} />
          </div>
        );
      })}
    </>
  );
};

export default LogoContent;
