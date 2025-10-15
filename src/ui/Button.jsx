import { cn } from "./cn";
import { motion } from "framer-motion";

export default function Button({ as = "button", className, variant="primary", children, ...props }) {
  const Comp = motion[as] || motion.button;
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    secondary: "bg-white border border-slate-300 hover:bg-slate-50",
    danger: "bg-rose-100 text-rose-900 border border-rose-300 hover:bg-rose-200",
    ghost: "bg-transparent hover:bg-black/5",
  };
  return (
    <Comp
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
