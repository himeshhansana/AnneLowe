import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}
export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-200";
  const variantStyles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow"
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>;
};