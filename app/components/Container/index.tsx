import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="px-6 py-4 h-full flex flex-col max-w-[500px] min-w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default Container;
