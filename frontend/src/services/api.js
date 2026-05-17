export const API_BASE = import.meta.env.VITE_API_URL || '/api'

export async function getHealth() {
  const response = await fetch(`${API_BASE}/health`)
  if (!response.ok) {
    throw new Error('No se pudo conectar con el backend')
  }
  return response.json()
}
