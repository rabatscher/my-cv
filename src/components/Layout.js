import React from "react";

const Layout = ({ children, className }) => {
  return (
    <>
      <div
        // className=" BORDER-SOLID w-[50%] flex justify-center"
        className={`w-full h-full inline-block z-0 bg-yellow p-5 ${className}`}
        // h-full inline-block z-0 bg-light p-32
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
