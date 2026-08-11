"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutinaService = void 0;
// src/services/rutina.service.js
const rutina_repository_js_1 = require("../repositories/rutina.repository.js");
exports.rutinaService = {
    // Obtener todas las rutinas del usuario logueado
    async obtenerMisRutinas(usuarioId) {
        return await rutina_repository_js_1.rutinaRepository.findByUsuarioId(usuarioId);
    },
    // Crear una nueva rutina
    async crearRutina(usuarioId, datos) {
        // Validación básica: el título no puede estar vacío
        if (!datos.titulo || datos.titulo.trim() === '') {
            throw new Error('El título de la rutina es obligatorio');
        }
        // El repositorio se encarga de guardar en la BD
        return await rutina_repository_js_1.rutinaRepository.create({
            ...datos,
            usuarioId
        });
    },
    // Actualizar una rutina (CON VALIDACIONES DE SEGURIDAD)
    async actualizarRutina(id, usuarioId, datos) {
        // 1. Verificar que la rutina existe (antes de actualizar)
        const rutinaExistente = await rutina_repository_js_1.rutinaRepository.findById(id);
        if (!rutinaExistente) {
            throw new Error('Rutina no encontrada');
        }
        // 2. Verificar que el usuario es el dueño (permisos)
        if (rutinaExistente.usuarioId !== usuarioId) {
            throw new Error('No tienes permisos para modificar esta rutina');
        }
        // 3. Si pasa todo, actualizar
        return await rutina_repository_js_1.rutinaRepository.update(id, datos);
    },
    // Eliminar una rutina (CON TODAS LAS VALIDACIONES DE SEGURIDAD)
    async eliminarRutina(id, usuarioId) {
        // 1. Verificar que la rutina existe (antes de borrar)
        const rutinaExistente = await rutina_repository_js_1.rutinaRepository.findById(id);
        if (!rutinaExistente) {
            throw new Error('Rutina no encontrada');
        }
        // 2. Verificar que el usuario es el dueño (permisos y que no esté borrando algo ajeno)
        if (rutinaExistente.usuarioId !== usuarioId) {
            throw new Error('No tienes permisos para eliminar esta rutina');
        }
        // 3. Si pasa todo, eliminar
        return await rutina_repository_js_1.rutinaRepository.delete(id);
    }
};
