import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../state/AuthContext";
import {
  User,
  Mail,
  Wine,
  Calendar,
  Sparkles,
  Trophy,
  TrendingUp,
  LogOut,
} from "lucide-react";

export default function Profile() {
  const { user, logout } = useAuth();
  if (!user) return <Navigate to="/" replace />;

  const memberSince = new Date(user.created_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const daysActive = Math.floor(
    (new Date() - new Date(user.created_at)) / (1000 * 60 * 60 * 24)
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur border-2 border-white/30 flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{user.display_name}</h1>
              <p className="text-indigo-100 flex items-center gap-2 mt-1">
                <Mail size={16} />
                {user.email}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-4">
              <div className="flex items-center gap-2 text-indigo-100 text-sm mb-1">
                <Wine size={16} />
                Licor favorito
              </div>
              <div className="text-2xl font-bold">{user.favorite_base}</div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-4">
              <div className="flex items-center gap-2 text-indigo-100 text-sm mb-1">
                <Calendar size={16} />
                Días activo
              </div>
              <div className="text-2xl font-bold">{daysActive}</div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-4">
              <div className="flex items-center gap-2 text-indigo-100 text-sm mb-1">
                <Sparkles size={16} />
                Recomendaciones
              </div>
              <div className="text-2xl font-bold">0</div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-4">
              <div className="flex items-center gap-2 text-indigo-100 text-sm mb-1">
                <Trophy size={16} />
                Nivel
              </div>
              <div className="text-2xl font-bold">Novato</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Información del perfil */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <User size={20} />
                Información del perfil
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-4">
                  <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                    Nombre completo
                  </dt>
                  <dd className="text-lg font-medium text-slate-900">
                    {user.display_name}
                  </dd>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                    Correo electrónico
                  </dt>
                  <dd className="text-lg font-medium text-slate-900">
                    {user.email}
                  </dd>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                    Licor preferido
                  </dt>
                  <dd className="text-lg font-medium text-slate-900 flex items-center gap-2">
                    <Wine size={20} className="text-indigo-600" />
                    {user.favorite_base}
                  </dd>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                    Miembro desde
                  </dt>
                  <dd className="text-lg font-medium text-slate-900">
                    {memberSince}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Actividad reciente */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Actividad reciente
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">Cuenta creada</div>
                    <div className="text-sm text-slate-500">
                      Te uniste hace {daysActive} {daysActive === 1 ? "día" : "días"}
                    </div>
                  </div>
                </div>

                <div className="text-center py-8 text-slate-500">
                  <Sparkles size={32} className="mx-auto mb-2 text-slate-300" />
                  <p className="text-sm">
                    Aún no tienes actividad. ¡Obtén tu primera recomendación!
                  </p>
                  <Link
                    to="/demo"
                    className="inline-flex items-center gap-2 mt-4 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Ir al sistema experto
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tarjeta de acciones rápidas */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Acciones rápidas</h3>
              <div className="space-y-3">
                <Link
                  to="/demo"
                  className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 transition-colors"
                >
                  <Sparkles size={18} />
                  <span className="font-medium">Nueva recomendación</span>
                </Link>

                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <LogOut size={18} />
                  <span className="font-medium">Cerrar sesión</span>
                </button>
              </div>
            </div>

            {/* Tarjeta de progreso */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl border border-indigo-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-indigo-600" size={24} />
                <h3 className="font-semibold text-slate-900">Tu progreso</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-600">Nivel: Novato</span>
                    <span className="font-medium text-indigo-600">0%</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-0" />
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  Obtén tu primera recomendación para desbloquear logros y subir de nivel.
                </p>
              </div>
            </div>

            {/* Tarjeta de tips */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900 mb-3">💡 Consejo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Guarda tus cocteles favoritos y el sistema aprenderá tus preferencias
                para darte mejores recomendaciones con el tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
