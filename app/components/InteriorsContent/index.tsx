import Image from "next/image";
import React from "react";

const InteriorItems = [
  {
    project: 'Проект "Жилой дом"',
    desc: "",
    theme: "",
    src: ["dom-1.jpg", "dom-2.jpg"],
  },
  {
    project: 'Проект "Отдел продаж BI Group"',
    desc: "",
    theme: "",
    src: ["bi-1.jpg", "bi-2.jpg"],
  },
  {
    project: 'Проект ЖК"Талан"',
    desc: "",
    theme: "",
    src: ["talan-1.jpg", "talan-2.jpg"],
  },
  {
    project: 'Проект ЖК "Французский Квартал"',
    desc: "",
    theme: "",
    src: ["french-1.jpg", "french-2.jpg"],
  },
  {
    project: 'Проект ЖК "Абырой"',
    desc: "",
    theme: "",
    src: ["abyroi-1.jpg", "abyroi-2.jpg"],
  },
];

const InteriorsContent = () => {
  return (
    <>
      {InteriorItems.map((item, index) => {
        return (
          <div key={index}>
            <p className="text-bold">{item.project}</p>
            <p>{item.desc}</p>
            <p>{item.theme}</p>
            <div className="flex flex-wrap gap-5 mt-4">
              {item.src.map((img, index) => {
                return (
                  <Image
                    key={index}
                    src={`/img/interior/${img}`}
                    alt="image"
                    width={400}
                    height={400}
                  />
                );
              })}
            </div>
            <hr className="my-3" />
          </div>
        );
      })}
    </>
  );
};

export default InteriorsContent;
