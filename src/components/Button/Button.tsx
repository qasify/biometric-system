// src/components/Button.tsx
import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ variant = "filled", onClick, children, className, ...rest }) => {
  const styles = {
    bordered:
      "bg-white hover:bg-hover-light text-gray-3-dark border border-gray-3-dark",
    filled: "bg-black hover:bg-hover-dark text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`w-max  py-2 px-4 rounded focus:outline-none focus:shadow-outline ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
