// src/components/Button.tsx
import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-max bg-black hover:bg-hover-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default Button;
