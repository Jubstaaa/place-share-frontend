import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={`w-full mx-auto bg-white border border-gray-200 rounded-lg shadow p-4 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
