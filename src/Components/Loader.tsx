import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="flex justify-center	items-center w-full"
    >
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
