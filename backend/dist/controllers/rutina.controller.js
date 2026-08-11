"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutinaController = void 0;
// src/controllers/rutina.controller.js
const rutina_service_js_1 = require("../services/rutina.service.js");
exports.rutinaController = {
    // Obtener todas las rutinas del usuario
    async getMisRutinas(req, res, next) {
        try {
            const usuarioId = req.user.id;
            const rutinas = await rutina_service_js_1.rutinaService.obtenerMisRutinas(usuarioId);
            res.json({
                success: true,
                data: rutinas
            });
        }
        catch (error) {
            next(error);
        }
    },
    // Crear una nueva rutina
    async createRutina(req, res, next) {
        try {
            const usuarioId = req.user.id;
            const { titulo, categoria, duracion, calorias, ejercicios } = req.body;
            const rutina = await rutina_service_js_1.rutinaService.crearRutina(usuarioId, {
                titulo,
                categoria,
                duracion: parseInt(duracion),
                calorias: parseInt(calorias),
                ejercicios: ejercicios ? JSON.stringify(ejercicios) : null
            });
            res.status(201).json({
                success: true,
                data: rutina,
                message: 'Rutina creada correctamente'
            });
        }
        catch (error) {
            next(error);
        }
    },
    // Actualizar una rutina
    async updateRutina(req, res, next) {
        try {
            const usuarioId = req.user.id;
            const id = parseInt(req.params.id, 10);
            const { titulo, categoria, duracion, calorias, ejercicios } = req.body;
            const rutina = await rutina_service_js_1.rutinaService.actualizarRutina(id, usuarioId, {
                titulo,
                categoria,
                duracion: duracion ? parseInt(duracion) : undefined,
                calorias: calorias ? parseInt(calorias) : undefined,
                ejercicios: ejercicios ? JSON.stringify(ejercicios) : undefined
            });
            res.json({
                success: true,
                data: rutina,
                message: 'Rutina actualizada correctamente'
            });
        }
        catch (error) {
            next(error);
        }
    },
    // Eliminar una rutina (YA CON SEGURIDAD)
    async deleteRutina(req, res, next) {
        try {
            const usuarioId = req.user.id;
            const id = parseInt(req.params.id, 10);
            await rutina_service_js_1.rutinaService.eliminarRutina(id, usuarioId);
            res.json({
                success: true,
                message: 'Rutina eliminada correctamente'
            });
        }
        catch (error) {
            next(error);
        }
    }
};
