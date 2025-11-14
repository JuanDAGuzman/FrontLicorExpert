import { api } from "./client";

export function evalPretty(facts) {
  return api("/expert/eval-pretty", {
    method: "POST",
    body: JSON.stringify({ facts }),
  });
}

export function recomendar(facts) {
  return api("/expert/recomendar", {
    method: "POST",
    body: JSON.stringify({ facts }),
  });
}

// Mantener compatibilidad con código anterior
export const recomendarLegacy = recomendar;
