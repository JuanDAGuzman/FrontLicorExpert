import { Dialog, Transition, Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAuth } from "../state/AuthContext";
import { api } from "../api/client";
import { motion } from "framer-motion";

function Field({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-slate-500">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

function FavoriteSelect({ value, onChange }) {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useState(() => {
    (async () => {
      try {
        const d = await api("/catalog/bases");
        if (d?.ok) setItems(d.items);
        else setErr("No se pudo cargar el catálogo");
      } catch {
        setErr("Error de red");
      }
    })();
  }, []);

  if (err) return <p className="text-xs text-rose-600">{err}</p>;
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
    >
      {items.map((i) => (
        <option key={i.code} value={i.code}>
          {i.label}
        </option>
      ))}
    </select>
  );
}

export default function AuthModal({ open, setOpen }) {
  const { login, register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [reg, setReg] = useState({
    display_name: "",
    email: "",
    password: "",
    favorite_base: "GIN",
  });
  const [log, setLog] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  async function onLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    const r = await login(log.email, log.password);
    setLoading(false);
    if (r.ok) setOpen(false);
    else setMsg(r.message || "Credenciales inválidas");
  }

  async function onRegister(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    const r = await register(reg);
    setLoading(false);
    if (r.ok) setOpen(false);
    else setMsg(r.message || "No se pudo crear la cuenta");
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={setOpen} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-2 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-2 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <Dialog.Title className="text-lg font-semibold">
                Bienvenido
              </Dialog.Title>
              <p className="text-slate-500 text-sm mb-4">
                Inicia sesión o crea tu cuenta.
              </p>

              <Tab.Group>
                <Tab.List className="flex gap-2 mb-4">
                  {["Iniciar sesión", "Crear cuenta"].map((t) => (
                    <Tab
                      key={t}
                      className={({ selected }) =>
                        `flex-1 rounded-xl px-3 py-2 text-sm border ${
                          selected
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white border-slate-300"
                        }`
                      }
                    >
                      {t}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <form onSubmit={onLogin} className="grid gap-3">
                      {msg && <p className="text-sm text-rose-600">{msg}</p>}
                      <Field
                        label="Email"
                        placeholder="tu@correo.com"
                        value={log.email}
                        onChange={(e) =>
                          setLog({ ...log, email: e.target.value })
                        }
                      />
                      <Field
                        label="Contraseña"
                        type="password"
                        placeholder="••••••••"
                        value={log.password}
                        onChange={(e) =>
                          setLog({ ...log, password: e.target.value })
                        }
                      />
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        className="rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
                      >
                        {loading ? "Entrando..." : "Entrar"}
                      </motion.button>
                    </form>
                  </Tab.Panel>
                  <Tab.Panel>
                    <form onSubmit={onRegister} className="grid gap-3">
                      {msg && <p className="text-sm text-rose-600">{msg}</p>}
                      <Field
                        label="Nombre"
                        placeholder="Tu nombre"
                        value={reg.display_name}
                        onChange={(e) =>
                          setReg({ ...reg, display_name: e.target.value })
                        }
                      />
                      <Field
                        label="Email"
                        placeholder="tu@correo.com"
                        value={reg.email}
                        onChange={(e) =>
                          setReg({ ...reg, email: e.target.value })
                        }
                      />
                      <Field
                        label="Contraseña"
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        value={reg.password}
                        onChange={(e) =>
                          setReg({ ...reg, password: e.target.value })
                        }
                      />
                      <div className="space-y-1">
                        <label className="text-xs text-slate-500">
                          Licor favorito
                        </label>
                        <FavoriteSelect
                          value={reg.favorite_base}
                          onChange={(v) => setReg({ ...reg, favorite_base: v })}
                        />
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        className="rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
                      >
                        {loading ? "Creando..." : "Registrarme"}
                      </motion.button>
                    </form>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
