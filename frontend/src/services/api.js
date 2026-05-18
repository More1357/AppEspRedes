export const API_BASE = window.location.pathname.startsWith('/~') 
  ? `/${window.location.pathname.split('/')[1]}/api` 
  : '/api';

// Health check
export async function getHealth() {
  const response = await fetch(`${API_BASE}/health`)
  if (!response.ok) {
    throw new Error('No se pudo conectar con el backend')
  }
  return response.json()
}

// ===== FUNCIONES DE AUTH =====

// Login
export async function login(email, password) {
  const response = await fetch(`${API_BASE}/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'Error en el login')
  }
  return data
}

// Registro
export async function register(nombre, email, password) {
  const response = await fetch(`${API_BASE}/v1/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, password })
  })
  
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'Error en el registro')
  }
  return data
}

export async function updatePerfil(datos) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/v1/usuario/perfil`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(datos)
  });
  
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Error al actualizar perfil');
  }
  return data;
}
