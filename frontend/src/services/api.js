// src/services/api.js

// URL base del API (configurable por entorno)
const API_BASE_URL = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000/api/v1';

// Helper para manejar las respuestas (con manejo de 401)
const handleResponse = async (response) => {
  const data = await response.json();
  
  // Si el token expiró o es inválido
  if (response.status === 401) {
    // Limpiar sesión
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    // Redirigir al login
    window.location.href = '/';
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
  
  return handleResponse(response);
};

// ========== ENDPOINTS ==========

// Health check
export const getHealth = async () => {
  const response = await fetch('/api/health');
  return handleResponse(response);
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

// Logout manual
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  window.location.href = '/';
};
