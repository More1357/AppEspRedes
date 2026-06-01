"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
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
        return await database_js_1.default.usuario.findUnique({
            where: { id },
            include: { proyectos: true }
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
