import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  error?: string;
}

export default function SelectField({
  label,
  options,
  error,
  className = "",
  ...props
}: SelectFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-slate-600">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-sky-500 transition bg-white cursor-pointer ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...props}
      >
        <option value="" disabled>
          Pilih {label?.toLowerCase() || "opsi"}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-[10px] text-red-500">{error}</span>}
    </div>
  );
}