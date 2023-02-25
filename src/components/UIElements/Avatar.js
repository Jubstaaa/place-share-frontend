import React from "react";

function Avatar({ image, alt }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img className="block rounded-full w-full h-full" src={image} alt={alt} />
    </div>
  );
}

export default Avatar;
