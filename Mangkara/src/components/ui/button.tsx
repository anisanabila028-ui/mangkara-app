import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "py-3 px-5 rounded-xl font-bold text-xs transition duration-200 flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-200 active:scale-[0.99]",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-[0.99]",
    outline:
      "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 active:scale-[0.99]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}