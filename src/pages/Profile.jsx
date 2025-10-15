import { Navigate } from "react-router-dom";
import { useAuth } from "../state/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <div className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Mi perfil</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <dt className="text-xs text-slate-500">Nombre</dt>
            <dd className="text-slate-900">{user.display_name}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Email</dt>
            <dd className="text-slate-900">{user.email}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Licor favorito</dt>
            <dd className="text-slate-900">{user.favorite_base}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Creado</dt>
            <dd className="text-slate-900">
              {new Date(user.created_at).toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
