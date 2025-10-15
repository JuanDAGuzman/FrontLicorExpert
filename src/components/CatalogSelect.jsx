import { useEffect, useState } from "react";
import { api } from "../api/client";
import Alert from "../ui/Alert";
import { Select } from "../ui/Input";

export default function CatalogSelect({ value, onChange }) {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await api("/catalog/bases");
        if (data?.ok) setItems(data.items);
        else setErr(data?.message || "Error del backend");
      } catch {
        setErr("Error de red cargando catálogo");
      }
    })();
  }, []);

  if (err) return <Alert type="error">{err}</Alert>;

  return (
    <Select value={value} onChange={(e)=>onChange(e.target.value)}>
      {items.map(it => <option key={it.code} value={it.code}>{it.label}</option>)}
    </Select>
  );
}
