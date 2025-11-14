// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Step({ title, children, hint }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .35 }}
      className="card p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        {hint && <span className="text-xs text-slate-500">{hint}</span>}
      </div>
      <div className="grid gap-4">{children}</div>
    </motion.div>
  );
}
