import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function InputField({
  label,
  error,
  type = "text",
  className = "",
  ...props
}: InputFieldProps) {
  // Toggle hanya aktif untuk input bertipe password
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const resolvedType = isPassword && showPassword ? "text" : type;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-slate-600">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={resolvedType}
          className={`w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition bg-white ${
            isPassword ? "pr-11" : ""
          } ${error ? "border-red-500" : ""} ${className}`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
          >
            {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>

      {error && <span className="text-[10px] text-red-500">{error}</span>}
    </div>
  );
}
