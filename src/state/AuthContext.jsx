import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/client";

const AuthCtx = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() { return useContext(AuthCtx); }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  async function refreshMe() {
    try {
      const d = await api("/me");
      setUser(d.ok ? d.user : null);
    } finally {
      setReady(true);
    }
  }

  useEffect(() => { refreshMe(); }, []);

  async function login(email, password) {
    const d = await api("/auth/login", { method:"POST", body: JSON.stringify({ email, password }) });
    if (d.ok) setUser(d.user);
    return d;
  }

  async function register(payload) {
    const d = await api("/auth/register", { method:"POST", body: JSON.stringify(payload) });
    if (d.ok) setUser(d.user);
    return d;
  }

  async function logout() {
    await api("/auth/logout", { method:"POST" });
    setUser(null);
  }

  async function logoutAll() {
    await api("/auth/logout_all", { method:"POST" });
    setUser(null);
  }

  return (
    <AuthCtx.Provider value={{ user, ready, login, register, logout, logoutAll, refreshMe }}>
      {children}
    </AuthCtx.Provider>
  );
}
