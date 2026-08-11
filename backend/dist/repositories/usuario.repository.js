"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
// src/repositories/usuario.repository.js
const database_js_1 = __importDefault(require("../config/database.js"));
exports.usuarioRepository = {
    async findByEmail(email) {
        return await database_js_1.default.usuario.findUnique({
            where: { email }
        });
    },
    async create(data) {
        return await database_js_1.default.usuario.create({
            data
        });
    },
    async findById(id) {
        // Sin include de proyectos (no se necesita en el perfil)
        return await database_js_1.default.usuario.findUnique({
            where: { id }
        });
    },
    async update(id, data) {
        return await database_js_1.default.usuario.update({
            where: { id },
            data
        });
    },
    async delete(id) {
        return await database_js_1.default.usuario.delete({
            where: { id }
        });
    }
};
