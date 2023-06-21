import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="px-6 pt-4 sm:px-12 md:px-24 md:pt-14 h-full flex flex-col">
      {children}
    </div>
  );
};

export default Container;
