import React, { useState } from "react";

export default function Textfield({ label, value, onChange, type, className, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor="email" className="block text-gray-600 capitalize">
        {label}
      </label>
      <div className="flex items-center w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none">
        <input
          type={showPassword ? "text" : type}
          className="w-full focus:outline-none focus:border-none"
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
        />
        {type === "password" && (
          <div onClick={() => setShowPassword(!showPassword)} className="">
            <h1 className="cursor-pointer">{showPassword ? "hide" : "show"}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export function MultiLineTextField({styles, label, desc}){
  return (
    <div className={`mx-2`}>
        <label className="block text-gray-600 capitalize">
        {label}
      </label>
      <textarea name="" id="" placeholder={desc} rows="5" className={`p-3 w-full border-2 rounded my-2 ${styles} italic`}></textarea>
    </div>
  )
}