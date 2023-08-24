import React from "react";
import {FcGoogle} from "react-icons/fc";

export const GoogleButton = (props) => {
  return (
    <button class="flex items-center gap-1 bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none"
        onClick={props.onClick}
    >
      <FcGoogle className="text-2xl"/>
      <span>Continue with Google</span>
    </button>
  );
};
