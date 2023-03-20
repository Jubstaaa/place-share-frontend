import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.href) {
    return (
      <a
        className={`inline-block p-2 lg:px-4 md:mx-2 my-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-500 md:ml-1 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed ${
          props.small && "!text-sm"
        } ${props.big && "!text-2xl"} ${
          props.danger &&
          "!bg-red-500 !border-red-500 hover:!bg-red-600 hover:!border-red-600 text-white"
        } ${
          props.info &&
          "!bg-yellow-500 !border-yellow-500 hover:!bg-yellow-600 hover:!border-yellow-600 text-white"
        }  ${
          props.inverse &&
          "!bg-transparent !text-[#ff0055] hover:!bg-[#ff0055] hover:!text-white"
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  } else if (props.to) {
    return (
      <Link
        className={`inline-block p-2 lg:px-4 md:mx-2 my-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-500 md:ml-1 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed ${
          props.small && "!text-sm"
        } ${props.big && "!text-2xl"} ${
          props.danger &&
          "!bg-red-500 !border-red-500 hover:!bg-red-600 hover:!border-red-600 text-white"
        } ${
          props.info &&
          "!bg-yellow-500 !border-yellow-500 hover:!bg-yellow-600 hover:!border-yellow-600 text-white"
        }  ${
          props.inverse &&
          "!bg-transparent !text-[#ff0055] hover:!bg-[#ff0055] hover:!text-white"
        }`}
        to={props.to}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        className={`inline-block p-2 lg:px-4 md:mx-2 my-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-500 md:ml-1 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed  ${
          props.small && "!text-sm"
        } ${props.big && "!text-2xl"} ${
          props.danger &&
          "!bg-red-500 !border-red-500 hover:!bg-red-600 hover:!border-red-600 text-white"
        } ${
          props.info &&
          "!bg-yellow-500 !border-yellow-500 hover:!bg-yellow-600 hover:!border-yellow-600 text-white"
        } ${
          props.inverse &&
          "!bg-transparent !text-[#ff0055] !border-[#ff0055] hover:!bg-[#ff0055] hover:!text-white"
        }`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
