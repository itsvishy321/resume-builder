import React from 'react'

export const FormInputText = ({ label, className, ...props }) => {
  return (
    <div className={`flex flex-col gap-2  ${className}`}>
      {label && (
        <label className="pl-1 text-secondary text-lg font-bold">
          {label}
        </label>
      )}
      <textarea
        type="text"
        {...props}
        className="h-40 max-w-3xl transition-all text-text-25 border-none rounded-xl bg-inputBg shadow-input p-3 text-md font-semibold outline-white tracking-wider "
      />
    </div>
  )
}
