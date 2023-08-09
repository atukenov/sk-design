import Image from "next/image";
import React from "react";

const InteriorItems = [
  {
    project: "Проект ЖК Абырой",
    desc: "",
    theme: "",
    src: "",
  },
  {
    project: "Проект ЖК Талан, Алия",
    desc: "",
    theme: "",
    src: "",
  },
  {
    project: "Проект Отдел продаж BI Group",
    desc: "",
    theme: "",
    src: "",
  },
  {
    project: "Проект Жилой дом",
    desc: "",
    theme: "",
    src: "",
  },
];

const InteriorsContent = () => {
  return (
    <>
      {InteriorItems.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.project}</p>
            <p>{item.desc}</p>
            <p>{item.theme}</p>
            {item.src && (
              <Image src={item.src} alt="image" width={200} height={200} />
            )}
            <hr className="my-3" />
          </div>
        );
      })}
    </>
  );
};

export default InteriorsContent;
