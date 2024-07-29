// src/components/InputField.tsx
import React from "react";
import { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
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
        className="shadow appearance-none border border-gray-1 rounded w-full py-2 px-3 text-text-light leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;
