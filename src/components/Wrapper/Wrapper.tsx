import React from "react";

interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1519px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
