const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function api(path, opts = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(opts.headers || {}),
  };
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers,
    credentials: "include",
  });

  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `Respuesta no JSON (${res.status}): ${text.slice(0, 120)}...`
    );
  }

  return res.json();
}
