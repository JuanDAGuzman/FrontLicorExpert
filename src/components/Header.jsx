import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { Menu } from "@headlessui/react";
import AuthModal from "./AuthModal";
import { useAuth } from "../state/AuthContext";

export default function Header() {
  const { user, logout, logoutAll } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-slate-900 text-xl">
            Licor<span className="text-indigo-600">Expert</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className="text-slate-600 hover:text-slate-900">
              Inicio
            </NavLink>
            <NavLink to="/demo" className="text-slate-600 hover:text-slate-900">
              Obtener recomendaciones
            </NavLink>

            <NavLink
              to="/profile"
              className="text-slate-600 hover:text-slate-900"
            >
              Mi perfil
            </NavLink>
          </nav>

          {user ? (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-1.5 hover:bg-slate-50">
                <UserRound size={16} />
                <span className="hidden sm:block">{user.display_name}</span>
                <ChevronDown size={16} />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-md p-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={`block rounded-lg px-3 py-2 ${
                        active ? "bg-slate-50" : ""
                      }`}
                    >
                      Mi perfil
                    </Link>
                  )}
                </Menu.Item>
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
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`w-full text-left rounded-lg px-3 py-2 ${
                        active ? "bg-slate-50" : ""
                      }`}
                    >
                      <div className="inline-flex items-center gap-2">
                        <LogOut size={16} /> Cerrar sesión
                      </div>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 text-sm"
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </header>

      <AuthModal open={open} setOpen={setOpen} />
    </>
  );
}
