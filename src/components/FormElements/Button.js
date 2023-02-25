import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.href) {
    return (
      <a
        className={`px-6 py-2 m-2 border border-[#ff0055] rounded-md bg-[#ff0055] text-white cursor-pointer mr-4 inline-block outline-none hover:bg-[#ff4385] hover:border-[#ff4385] disabled:bg-[#ccc] disabled:border-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed ${
          props.small && "!text-sm"
        } ${props.big && "!text-2xl"} ${
          props.danger &&
          "!bg-[#830000] !border-[#830000] hover:!bg-[#f34343] hover:!border-[#f34343]"
        } ${
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
        className={`px-6 py-2 m-2 border border-[#ff0055] rounded-md bg-[#ff0055] text-white cursor-pointer mr-4 inline-block outline-none hover:bg-[#ff4385] hover:border-[#ff4385] disabled:bg-[#ccc] disabled:border-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed ${
          props.small && "!text-sm"
        } ${props.big && "!text-2xl"} ${
          props.danger &&
          "!bg-[#830000] !border-[#830000] hover:!bg-[#f34343] hover:!border-[#f34343]"
        } ${
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
        className={`px-6 py-2 m-2 border border-[#ff0055] rounded-md bg-[#ff0055] text-white cursor-pointer mr-4 inline-block outline-none hover:bg-[#ff4385] hover:border-[#ff4385] disabled:bg-[#ccc] disabled:border-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed ${
          props.small && "!text-sm"
        } ${props.big && "!text-2xl"} ${
          props.danger &&
          "!bg-[#830000] !border-[#830000] hover:!bg-[#f34343] hover:!border-[#f34343]"
        } ${
          props.inverse &&
          "!bg-transparent !text-[#ff0055] hover:!bg-[#ff0055] hover:!text-white"
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
