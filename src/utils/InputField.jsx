import React from "react";

export default function InputField({ label, id, name = "", type = "text", isTextarea = false, rows, handleChange = () => {} }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows || 4}
          name={name}
          className="mt-2 block w-full min-h-12 p-4 bg-slate-100 text-secondary rounded-md shadow-sm border border-transparent focus:border-primary focus:ring-0 focus:outline-none"
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className="mt-2 block w-full h-12 px-4  bg-slate-100 text-secondary rounded-md shadow-sm border border-transparent focus:border-primary focus:ring-0 focus:outline-none"
          onChange={handleChange}
        />
      )}
    </div>
  );
}
