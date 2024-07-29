// src/components/InputField.tsx
import React from "react";
import { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  pattern,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-text-light text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-text-light leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-error" : "border-gray-1"
        }`}
        pattern={pattern}
      />
    </div>
  );
};

export default InputField;
