import { useState } from "react";
import { api } from "../api/client";
import CatalogSelect from "./CatalogSelect";
import Alert from "../ui/Alert";
import Button from "../ui/Button";
import { Input, Label } from "../ui/Input";
import { motion } from "framer-motion";

export default function RegisterForm({ onSuccess }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    display_name: "",
    favorite_base: "GIN",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const data = await api("/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (data.ok) {
        setMsg({
          t: "success",
          m: `¡Cuenta creada para ${data.user.display_name}!`,
        });
        onSuccess?.(data.user);
        setForm({
          email: "",
          password: "",
          display_name: "",
          favorite_base: "GIN",
        });
      } else setMsg({ t: "error", m: data.message || "Error al registrar" });
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
      transition={{ duration: 0.4 }}
    >
      {msg && <Alert type={msg.t}>{msg.m}</Alert>}

      <Label>Nombre</Label>
      <Input
        value={form.display_name}
        onChange={(e) => setForm({ ...form, display_name: e.target.value })}
        placeholder="Tu nombre"
      />

      <Label>Email</Label>
      <Input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="tu@correo.com"
      />

      <Label>Contraseña</Label>
      <Input
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Mínimo 8 caracteres"
      />

      <Label>Licor favorito</Label>
      <CatalogSelect
        value={form.favorite_base}
        onChange={(v) => setForm({ ...form, favorite_base: v })}
      />

      <Button disabled={loading} variant="primary" className="mt-1">
        {loading ? "Creando..." : "Registrarme"}
      </Button>
    </motion.form>
  );
}
