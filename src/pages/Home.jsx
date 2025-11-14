import { Link } from "react-router-dom";
import { Sparkles, Zap, Shield, Heart, Wine, Droplets } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200 px-4 py-1.5 text-sm text-indigo-700 mb-6">
              <Sparkles size={16} />
              Sistema experto de recomendaciones
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Tu coctel perfecto,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                al instante
              </span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              Sistema inteligente que analiza tus preferencias, ingredientes disponibles
              y restricciones para recomendarte el coctel ideal. Basado en reglas de
              mixología profesional.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all"
              >
                <Zap size={18} />
                Obtener recomendación
              </Link>
              <Link
                to="/profile"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 font-medium hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Mi perfil
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-violet-400/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl bg-white/80 backdrop-blur border border-slate-200 p-6 shadow-2xl">
              <img
                alt="cocteles coloridos"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                src="https://images.pexels.com/photos/19207668/pexels-photo-19207668.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nuestro sistema experto evalúa múltiples factores para darte la
              mejor recomendación personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                <Wine className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Tus preferencias
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Indica tu sabor favorito, si prefieres alcohol, hielo, y el tipo
                de experiencia que buscas.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <Droplets className="text-violet-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Ingredientes disponibles
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Selecciona qué ingredientes tienes a mano: frutas, bitter, vermut,
                burbujeantes, etc.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <Sparkles className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Recomendación inteligente
              </h3>
              <p className="text-slate-600 leading-relaxed">
                El sistema evalúa todas las reglas y te sugiere el coctel perfecto
                con advertencias si aplican.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Recomendaciones basadas en reglas profesionales
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Shield className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Respeta tus restricciones
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Si no tienes un ingrediente o prefieres evitar alcohol, el
                    sistema lo tiene en cuenta.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                  <Zap className="text-violet-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Resultados instantáneos
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Evaluación en tiempo real de todas las reglas de mixología.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Heart className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Personalizado para ti
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Guarda tus preferencias y obtén sugerencias adaptadas a tu gusto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 p-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
                <div>
                  <div className="font-semibold text-slate-900">Usuario Premium</div>
                  <div className="text-xs text-slate-500">Miembro desde 2024</div>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="text-sm text-slate-600 mb-2">Última recomendación:</div>
                <div className="text-lg font-semibold text-indigo-600 mb-1">
                  Gin Tonic
                </div>
                <div className="text-xs text-slate-500">
                  Basado en: Ácido, Gin, Tónica disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para descubrir tu coctel ideal?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y obtén recomendaciones personalizadas
            basadas en tus gustos e ingredientes disponibles.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-600 px-8 py-4 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <Sparkles size={20} />
            Empezar ahora gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Sistema Experto</h3>
              <p className="text-sm leading-relaxed">
                Recomendaciones inteligentes de cocteles basadas en tus preferencias
                y ingredientes disponibles.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Enlaces</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-white transition-colors">
                    Mi Perfil
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Tecnología</h3>
              <p className="text-sm leading-relaxed">
                Construido con React, Express, PostgreSQL y un motor de reglas
                personalizado.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2024 Sistema Experto de Cocteles. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
