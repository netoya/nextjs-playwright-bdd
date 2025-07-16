import type { Agency } from "@/_agency/_back/agency/domain/agency.entity";

/**
 * Obtiene todas las agencias desde la API backend.
 * Se recomienda usar este helper en componentes de UI para mantener el flujo desacoplado.
 */
export async function getAllAgencies(): Promise<Agency[]> {
  const res = await fetch("/api/agency");
  if (!res.ok) throw new Error("Error al cargar agencias");
  return res.json();
}
