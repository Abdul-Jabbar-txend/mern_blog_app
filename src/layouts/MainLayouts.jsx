import React from "react";
import Navbar from "../components/Navbar";
import Outelet from "../components/Outelet";

const MainLayouts = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <Navbar />
      <Outelet />
    </div>
  );
};

export default MainLayouts;
