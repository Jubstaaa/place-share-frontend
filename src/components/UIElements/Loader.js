import React from "react";

function Loader() {
  return (
    <div className="w-80 h-80 mx-auto bg-indigo-600 flex justify-center items-center shadow-md">
      <div className="w-24 h-4 flex relative">
        <span className="w-4 h-4 rounded-full bg-white mr-7 absolute inset-0 animate-grow"></span>
        <span className="w-4 h-4 rounded-full bg-white animate-move mr-7"></span>
        <span className="w-4 h-4 rounded-full bg-white animate-move mr-7"></span>
        <span className="w-4 h-4 rounded-full bg-white absolute top-0 right-0 mr-0 animate-growReverse"></span>
      </div>
    </div>
  );
}

export default Loader;
