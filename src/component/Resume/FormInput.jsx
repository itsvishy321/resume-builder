import React from "react";

export const FormInput = ({ label, className , ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="pl-1 text-primary text-lg font-semibold" >
          {label}
        </label>
      )}
      <input
        type="text"
        {...props}
        className=" transition-all text-black-50 border-none rounded-xl bg-inputBg shadow-input p-3 text-md font-semibold outline-white tracking-wider "/>
    </div>
  );
};
