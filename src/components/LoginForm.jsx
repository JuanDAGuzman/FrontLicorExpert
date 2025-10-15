import { useState } from "react";
import { api } from "../api/client";
import Alert from "../ui/Alert";
import Button from "../ui/Button";
import { Input, Label } from "../ui/Input";
import { motion } from "framer-motion";

export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const data = await api("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      if (data.ok) {
        setMsg({ t: "success", m: `Bienvenido, ${data.user.display_name}` });
        onSuccess?.(data.user);
        setEmail("");
        setPassword("");
      } else
        setMsg({ t: "error", m: data.message || "Credenciales inválidas" });
    } catch {
      setMsg({ t: "error", m: "Error de red" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="grid gap-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      {msg && <Alert type={msg.t}>{msg.m}</Alert>}

      <Label>Email</Label>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
      />

      <Label>Contraseña</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />

      <Button disabled={loading} variant="secondary" className="mt-1">
        {loading ? "Entrando..." : "Entrar"}
      </Button>
    </motion.form>
  );
}
