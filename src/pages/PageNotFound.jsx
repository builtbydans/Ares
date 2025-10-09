import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-50 bg-white">
      <h1 className="text-9xl font-bold">404 ERROR</h1>
      <p className="text-2xl mt-4">You've ventured off grid</p>
      <Link to="/">
        <button className="mt-10 bg-black p-2 text-white hover:bg-zinc-600">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
