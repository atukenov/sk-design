import Image from "next/image";
import React from "react";

interface Props {
  work: {
    title: string;
    field: string;
    desc: string;
    logo: string;
  };
  content: boolean;
}

const ExperienceItem = ({ work, content }: Props) => {
  const logo = (
    <div className="w-1/4 flex justify-center items-center">
      <Image
        src={`/img/${work.logo}.jpg`}
        alt={work.logo}
        width={500}
        height={500}
      />
    </div>
  );
  const info = (
    <div className="w-3/4  text-center">
      <h1 className="text-lg font-bold">{work.title}</h1>
      <h1 className="text-sm italic">{work.field}</h1>
      <h1 className="text-md break-words">{work.desc}</h1>
    </div>
  );

  return (
    <>
      {content ? (
        <div className="flex justify-between">
          {logo}
          {info}
        </div>
      ) : (
        <div className="flex justify-between">
          {info}
          {logo}
        </div>
      )}
    </>
  );
};

export default ExperienceItem;
