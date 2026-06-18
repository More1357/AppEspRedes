"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutinaRepository = void 0;
const database_js_1 = __importDefault(require("../config/database.js"));
exports.rutinaRepository = {
    // Obtener todas las rutinas de un usuario
    async findByUsuarioId(usuarioId) {
        return await database_js_1.default.rutina.findMany({
            where: { usuarioId },
            orderBy: { createdAt: 'desc' }
        });
    },
    // Crear una nueva rutina
    async create(data) {
        return await database_js_1.default.rutina.create({
            data
        });
    },
    // Actualizar una rutina
    async update(id, data) {
        return await database_js_1.default.rutina.update({
            where: { id },
            data
        });
    },
    // Eliminar una rutina
    async delete(id) {
        return await database_js_1.default.rutina.delete({
            where: { id }
        });
    }
};
