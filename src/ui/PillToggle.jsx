// src/ui/PillToggle.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useId } from "react";
import clsx from "clsx";

export default function PillToggle({
  value, // "si" | "no"
  onChange,
  options = [
    { label: "Sí", value: "si" },
    { label: "No", value: "no" },
  ],
  disabled = false,
  className = "",
  size = "md", // "sm" | "md"
}) {
  const uid = useId();
  const lid = `pill-${uid}`;

  const pad = size === "sm" ? "px-3 py-1" : "px-4 py-1.5";
  const text = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div
      className={clsx(
        "inline-flex rounded-full border border-slate-200 bg-slate-100 p-1 relative select-none",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      aria-disabled={disabled}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            disabled={disabled}
            onClick={() => !disabled && onChange(opt.value)}
            className={clsx(
              "relative rounded-full transition-colors",
              pad,
              text
            )}
          >
            {active && (
              <motion.span
                layoutId={lid}
                className="absolute inset-0 rounded-full bg-white shadow"
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            )}
            <span
              className={clsx(
                "relative",
                active ? "text-slate-900" : "text-slate-500"
              )}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
