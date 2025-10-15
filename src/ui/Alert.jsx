import { cn } from "./cn";
export default function Alert({ type="info", children, className }) {
  const map = {
    info: "bg-indigo-50 border-indigo-200 text-indigo-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    error: "bg-rose-50 border-rose-200 text-rose-900",
  };
  return (
    <div className={cn("rounded-xl border px-3 py-2 text-sm", map[type], className)}>
      {children}
    </div>
  );
}
