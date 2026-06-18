"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutinaController = void 0;
const rutina_repository_js_1 = require("../repositories/rutina.repository.js");
exports.rutinaController = {
    // Obtener todas las rutinas del usuario
    async getMisRutinas(req, res, next) {
        try {
            const rutinas = await rutina_repository_js_1.rutinaRepository.findByUsuarioId(req.user.id);
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
            const { titulo, categoria, duracion, calorias, ejercicios } = req.body;
            const rutina = await rutina_repository_js_1.rutinaRepository.create({
                titulo,
                categoria,
                duracion: parseInt(duracion),
                calorias: parseInt(calorias),
                ejercicios: ejercicios ? JSON.stringify(ejercicios) : null,
                usuarioId: req.user.id
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
            const { id } = req.params;
            const { titulo, categoria, duracion, calorias, ejercicios } = req.body;
            const rutina = await rutina_repository_js_1.rutinaRepository.update(parseInt(id), {
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
    // Eliminar una rutina
    async deleteRutina(req, res, next) {
        try {
            const { id } = req.params;
            await rutina_repository_js_1.rutinaRepository.delete(parseInt(id));
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
