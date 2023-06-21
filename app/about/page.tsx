import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap py-2 flex-1">
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="p-4">
          <Image
            className="-rotate-6"
            src="/img/about.jpg"
            alt="me"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="flex flex-col text-center text-lg lg:text-2xl px-2 md:px-5">
          <h1 className="mb-4 text-2xl lg:text-4xl">Saltanat Kadirova</h1>
          <p className="mb-2">
            Меня всю жизнь тянуло создавать, неважно, будь это что-то новое или
            чаще, компануя кусочки вдохновения, отобранные отовсюду.
          </p>
          <p className="mb-2">
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
