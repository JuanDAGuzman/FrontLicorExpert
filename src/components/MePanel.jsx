import { useEffect, useState } from "react";
import { api } from "../api/client";
import Alert from "../ui/Alert";
import Button from "../ui/Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { EllipsisVertical, LogOut, RefreshCcw, UserRound } from "lucide-react";
import { Menu } from "@headlessui/react";

export default function MePanel({ showLogoutAll = false }) {
  const [me, setMe] = useState(null);
  const [msg, setMsg] = useState(null);

  const loadMe = async () => {
    const d = await api("/me");
    setMe(d.ok ? d.user : null);
  };
  useEffect(() => {
    loadMe();
  }, []);

  const refresh = async () => {
    const r = await api("/auth/refresh", { method: "POST" });
    setMsg(
      r.ok
        ? { t: "success", m: "Token renovado." }
        : { t: "error", m: r.message || "No se pudo renovar" }
    );
  };
  const logout = async () => {
    const r = await api("/auth/logout", { method: "POST" });
    if (r.ok) setMe(null);
    setMsg({
      t: r.ok ? "success" : "error",
      m: r.ok ? "Sesión cerrada." : r.message || "Error",
    });
  };
  const logoutAll = async () => {
    const r = await api("/auth/logout_all", { method: "POST" });
    if (r.ok) setMe(null);
    setMsg({
      t: r.ok ? "success" : "error",
      m: r.ok
        ? "Sesiones cerradas en todos los dispositivos."
        : r.message || "Error",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="grid gap-3"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Sesión</h2>
        <Menu as="div" className="relative">
          <Menu.Button className="rounded-xl border border-slate-300 px-2 py-1 hover:bg-slate-50">
            <EllipsisVertical size={18} />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-md p-1">
            {showLogoutAll && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutAll}
                    className={`w-full text-left rounded-lg px-3 py-2 ${
                      active ? "bg-rose-50" : ""
                    }`}
                  >
                    Cerrar sesión en todos los dispositivos
                  </button>
                )}
              </Menu.Item>
            )}
          </Menu.Items>
        </Menu>
      </div>

      {msg && <Alert type={msg.t}>{msg.m}</Alert>}

      <div className="rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-900 px-3 py-2 text-sm">
        {me ? "Sesión activa." : "Sin sesión activa."}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={loadMe}>
          <UserRound className="mr-2" size={16} /> /me
        </Button>
        <Button variant="secondary" onClick={refresh}>
          <RefreshCcw className="mr-2" size={16} /> Renovar
        </Button>
        <Button variant="ghost" onClick={logout}>
          <LogOut className="mr-2" size={16} /> Logout aquí
        </Button>
      </div>

      {me && (
        <pre className="bg-slate-50 border border-slate-200 rounded-xl p-3 overflow-auto text-sm">
          {JSON.stringify(me, null, 2)}
        </pre>
      )}
    </motion.div>
  );
}
