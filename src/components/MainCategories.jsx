import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl  xl:rounded-full p-4 shadow-lg items-center justify-enter gap-8">
      {/* Links  */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All posts
        </Link>
        link
      </div>
      {/* search */}
      <div className="">search</div>
    </div>
  );
};

export default MainCategories;
