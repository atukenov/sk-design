import React from "react";
import ExperienceItem from "../components/ExperienceItem";

const experience = [
  {
    title: "Инженер ПТО",
    field: "Строительная компания",
    desc: "Подсчет объемов материалов, составление и проверка актов",
    logo: "bi",
  },
  {
    title: "Комплектатор проектов",
    field: "Студия дизайна интерьера",
    desc: "Комплектация объекта чистовой отделкой, мебелью, соблюдение сроков",
    logo: "vv",
  },
  {
    title: "Проектный менеджер",
    field: "Студия дизайна интерьера",
    desc: "Ведение проектов под ключ, переговоры с заказчиками и клиентами",
    logo: "aura",
  },
  {
    title: 'ИП "SK"',
    field: "",
    desc: "Введение  собственных проектов (дизайн интерьера под ключ, комната кино)",
    logo: "sk",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 h-full md:w-1/2 md:items-center">
      {experience.map((ex, index) => {
        return (
          <ExperienceItem
            key={index}
            work={ex}
            content={index % 2 === 1 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Experience;
