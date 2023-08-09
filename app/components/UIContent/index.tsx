import Image from "next/image";
import React from "react";

const UIItems = [
  {
    project: 'Проект "Line Z"',
    desc: "Сайт-портфолио для web, interior, graphic designes",
    theme: "",
    src: "",
  },
  {
    project: 'Проект "Doctor Guw"',
    desc: "Сайт для сбора рейтингов врачей г.Атырау",
    theme: "",
    src: "",
  },
];

const UIContent = () => {
  return (
    <>
      {UIItems.map((item, index) => {
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

export default UIContent;
