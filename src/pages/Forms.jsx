import { useState } from "react";
import { api } from "../api/client"; 

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    sabor: "",
    con_alcohol: false,
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 👇 Usamos tu helper `api()`
      const data = await api("/preferences", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (data.ok) {
        setMensaje("✅ Preferencias guardadas con éxito");
        setFormData({ nombre: "", sabor: "", con_alcohol: false });
      } else {
        setMensaje("❌ " + (data.message || "Error al guardar las preferencias"));
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setMensaje("❌ Error de conexión con el servidor");
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Tus preferencias</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
      >
        <label className="block mb-3">
          <span className="font-medium">Nombre</span>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <label className="block mb-3">
          <span className="font-medium">Sabor preferido</span>
          <select
            name="sabor"
            value={formData.sabor}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          >
            <option value="">Selecciona...</option>
            <option value="dulce">Dulce</option>
            <option value="amargo">Amargo</option>
            <option value="ácido">Ácido</option>
            <option value="refrescante">Refrescante</option>
          </select>
        </label>

        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            name="con_alcohol"
            checked={formData.con_alcohol}
            onChange={handleChange}
          />
          ¿Deseas cócteles con alcohol?
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Guardar preferencias
        </button>
      </form>

      {mensaje && (
        <p className="text-center mt-4 text-lg">
          {mensaje}
        </p>
      )}
    </main>
  );
}
