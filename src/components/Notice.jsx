export default function Notice({ type = "info", children }) {
  const map = {
    info: "bg-indigo-50 text-indigo-900 border-indigo-200",
    success: "bg-emerald-50 text-emerald-900 border-emerald-200",
    error: "bg-rose-50 text-rose-900 border-rose-200",
  };
  return (
    <div
      className={`text-sm border rounded-xl px-3 py-2 ${map[type] || map.info}`}
    >
      {children}
    </div>
  );
}
