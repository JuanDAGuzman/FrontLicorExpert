import { cn } from "./cn";

export function Label({ children }) {
  return <label className="text-xs text-slate-500">{children}</label>;
}

export function Input(props) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-slate-300 px-3 py-2 outline-none",
        "focus:ring-2 focus:ring-indigo-400",
        props.className
      )}
    />
  );
}

export function Select({ className, ...props }) {
  return (
    <select
      {...props}
      className={cn(
        "w-full rounded-xl border border-slate-300 px-3 py-2 outline-none",
        "focus:ring-2 focus:ring-indigo-400",
        className
      )}
    />
  );
}
