import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="px-6 py-4 h-full flex flex-col">{children}</div>;
};

export default Container;
