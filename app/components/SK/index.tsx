import React from "react";
import "./styles.css";

const SK = () => {
  return (
    <div className="flex flex-wrap flex-1">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 z-0">
        <div className="">pervoe</div>
        <div>vtoroe</div>
      </div>
      <div className="flex justify-end items-end w-full lg:w-2/3 relative -z-10">
        <div className="sk-font-s absolute text-[30rem] -bottom-[225px] right-[100px] sm:text-[45rem] sm:-bottom-[350px] sm:right-[175px] xl:text-[85rem] xl:-bottom-[650px] xl:right-[300px]">
          S
        </div>
        <div className="sk-font-k absolute text-[15rem] -bottom-[125px] -right-[25px] sm:text-[25rem] sm:-bottom-[200px] sm:-right-[50px] xl:text-[45rem] xl:-bottom-[350px] xl:-right-[100px]">
          K
        </div>
      </div>
    </div>
  );
};

export default SK;
