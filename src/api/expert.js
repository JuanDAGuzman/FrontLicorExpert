import { api } from "./client";

export function evalPretty(facts) {
  return api("/expert/eval-pretty", {
    method: "POST",
    body: JSON.stringify({ facts }),
  });
}

export function recomendarLegacy(facts, userId = null) {
  return api("/expert/recomendar", {
    method: "POST",
    body: JSON.stringify({ facts, userId }),
  });
}
