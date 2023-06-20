import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="mx-24 mt-14">{children}</div>;
};

export default Container;
