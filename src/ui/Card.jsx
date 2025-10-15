import { cn } from "./cn";

export default function Card({ className, children }) {
  return (
    <div className={cn(
      "rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-sm",
      className
    )}>
      {children}
    </div>
  );
}
