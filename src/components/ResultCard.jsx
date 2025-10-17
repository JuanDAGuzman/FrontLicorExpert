import { motion } from "framer-motion";
import { PartyPopper, AlertTriangle } from "lucide-react";

export default function ResultCard({ top, alternativas }) {
  if (!top) return null;
  const isRec = top.tipo === "RECOMENDAR";
  const Icon = isRec ? PartyPopper : AlertTriangle;
  const color = isRec
    ? "bg-emerald-50 border-emerald-200 text-emerald-900"
    : "bg-amber-50 border-amber-200 text-amber-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="card p-5"
    >
      <div
        className={`rounded-xl border px-4 py-3 flex items-center gap-3 ${color}`}
      >
        <Icon size={18} />
        <div className="text-sm">
          <div className="font-semibold">
            {isRec ? "Recomendación" : "Falla detectada"}
          </div>
          <div>{top.valor}</div>
          <div className="text-xs text-slate-500 mt-1">Regla: {top.regla}</div>
        </div>
      </div>

      {alternativas?.length ? (
        <div className="mt-4">
          <div className="text-xs text-slate-500 mb-2">
            Otras coincidencias por prioridad:
          </div>
          <ul className="grid gap-2">
            {alternativas.map((a, i) => (
              <li
                key={i}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <span className="font-medium">{a.tipo}:</span> {a.valor}
                <span className="text-xs text-slate-400 ml-2">({a.regla})</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </motion.div>
  );
}
