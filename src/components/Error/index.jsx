import React from "react";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <>
      <div className="bg-dark vw-100 vh-100 d-inline-block">
        <h1 className="text-center text-danger mt-5">
          <BiError />
          &nbsp; 404 Page Not Found &nbsp;
          <BiError />
        </h1>
      </div>
    </>
  );
};

export default Error;
