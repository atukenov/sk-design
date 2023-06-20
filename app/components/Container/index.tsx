import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="mx-2 mt-4 md:mx-24 md:mt-14">{children}</div>;
};

export default Container;
