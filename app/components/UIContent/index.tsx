import Image from "next/image";
import React from "react";

const UIItems = [
  {
    project: 'Проект "Line Z"',
    desc: "Сайт-портфолио для web, interior, graphic designes",
    theme: "",
    src: "https://linez.atukenov.com",
  },
  {
    project: 'Проект "Doctor Guw"',
    desc: "Сайт для сбора рейтингов врачей г.Атырау",
    theme: "",
    src: "https://drguw.atukenov.com",
  },
];

const UIContent = () => {
  return (
    <div className="flex flex-col">
      {UIItems.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.project}</p>
            <p>{item.desc}</p>
            <p>{item.theme}</p>
            <a className="text-blue-400" href={item.src}>
              Go to Website
            </a>
            <hr className="my-3" />
          </div>
        );
      })}
    </div>
  );
};

export default UIContent;
