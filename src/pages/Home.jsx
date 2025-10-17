import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Tu recomendación de{" "}
            <span className="text-indigo-600">cocteles</span>, al instante.
          </h1>
          <p className="text-slate-600 mt-3">
            Responde a unas pocas preguntas (hielo, sabor, burbujeante, etc.) y
            te sugerimos el trago perfecto, respetando tus restricciones.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/demo"
              className="rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            >
              Empezar
            </Link>
            <Link
              to="/profile"
              className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-50"
            >
              Mi perfil
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-white/70 border border-slate-200 p-6">
          <img
            alt="copas"
            className="w-full object-cover rounded-2xl shadow-sm"
            src="https://images.pexels.com/photos/19207668/pexels-photo-19207668.jpeg"
          />
        </div>
      </section>
      <div
        id="wizard"
        className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 text-slate-500"
      >
        <p>…</p>
      </div>
    </main>
  );
}
