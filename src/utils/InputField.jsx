import React from "react";

export default function InputField({ label, id, type = "text", isTextarea = false, rows }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows || 4}
          className="mt-2 block w-full h-12 px-4 bg-slate-100 text-secondary rounded-md shadow-sm border border-transparent focus:border-primary focus:ring-0 focus:outline-none"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className="mt-2 block w-full h-12 px-4 bg-slate-100 text-secondary rounded-md shadow-sm border border-transparent focus:border-primary focus:ring-0 focus:outline-none"
        />
      )}
    </div>
  );
}
