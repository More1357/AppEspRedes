export const API_BASE_URL = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000/api/v1';
export const APP_BASE_URL = import.meta.env.BASE_URL ?? '/';

const redirectToAppRoot = () => {
  window.location.href = APP_BASE_URL;
};

// Helper para manejar las respuestas
// hadToken: true si en esta request se envió un token
const handleResponse = async (response, hadToken = false) => {
  const data = await response.json();
  
  // 401 solo es "sesión expirada" si habíamos enviado un token
  if (response.status === 401 && hadToken) {
    // Limpiar sesión
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    // Redirigir al login
    redirectToAppRoot();
    throw new Error('Sesión expirada. Por favor, iniciá sesión nuevamente.');
  }
  
  if (!response.ok) {
    throw new Error(data.message || 'Error en la petición');
  }
  return data;
};

// Función auxiliar para agregar el token automáticamente
const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  const hadToken = !!token;  // Recordar si había token antes de la request
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  return handleResponse(response, hadToken);
};

// ========== ENDPOINTS ==========

// Health check
export const getHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/health`);
  return handleResponse(response, false);
};

// Login (no requiere token)
export const login = async (email, password) => {
  const response = await authFetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  
  // Guardar token después de login exitoso
  if (response.success && response.data?.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
  }
  return response;
};

// Register (no requiere token)
export const register = async (nombre, email, password) => {
  const response = await authFetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ nombre, email, password }),
  });
  
  // Guardar token después de registro exitoso
  if (response.success && response.data?.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
  }
  return response;
};

// Obtener perfil (requiere token - se agrega automáticamente)
export const getPerfil = async () => {
  return authFetch(`${API_BASE_URL}/usuario/perfil`, {
    method: 'GET',
  });
};

// Actualizar perfil (requiere token - se agrega automáticamente)
export const updatePerfil = async (data) => {
  return authFetch(`${API_BASE_URL}/usuario/perfil`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

// Obtener todas las rutinas del usuario
export const obtenerRutinas = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/rutinas`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return handleResponse(response);
};

// Crear una nueva rutina
export const crearRutina = async (datos) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/rutinas`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });
  return handleResponse(response);
};

// Actualizar una rutina
export const actualizarRutina = async (id, datos) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/rutinas/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });
  return handleResponse(response);
};

// Eliminar una rutina
export const eliminarRutina = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/rutinas/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return handleResponse(response);
};

// Logout manual
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  redirectToAppRoot();
};