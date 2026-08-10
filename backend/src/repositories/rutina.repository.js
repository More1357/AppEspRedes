// src/repositories/rutina.repository.js
import prisma from '../config/database.js';

export const rutinaRepository = {
  // Obtener todas las rutinas de un usuario
  async findByUsuarioId(usuarioId) {
    return await prisma.rutina.findMany({
      where: { usuarioId },
      orderBy: { createdAt: 'desc' }
    });
  },

  // ✅ NUEVO: Buscar una rutina por ID (para verificar existencia)
  async findById(id) {
    return await prisma.rutina.findUnique({
      where: { id }
    });
  },

  // Crear una nueva rutina
  async create(data) {
    return await prisma.rutina.create({
      data
    });
  },

  // Actualizar una rutina
  async update(id, data) {
    return await prisma.rutina.update({
      where: { id },
      data
    });
  },

  // Eliminar una rutina
  async delete(id) {
    return await prisma.rutina.delete({
      where: { id }
    });
  }
};