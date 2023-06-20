import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image src="/img/about.jpg" alt="me" width={500} height={500} />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        about
      </div>
    </div>
  );
};

export default About;
