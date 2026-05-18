"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const usuario_repository_js_1 = require("../repositories/usuario.repository.js");
exports.usuarioController = {
    async getPerfil(req, res, next) {
        try {
            const usuario = await usuario_repository_js_1.usuarioRepository.findById(req.user.id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            const { password, ...usuarioSinPassword } = usuario;
            res.json({
                success: true,
                data: usuarioSinPassword
            });
        }
        catch (error) {
            next(error);
        }
    },
    async updatePerfil(req, res, next) {
        try {
            const { nombre, edad, peso, altura, nivelActividad } = req.body;
            const usuario = await usuario_repository_js_1.usuarioRepository.update(req.user.id, {
                nombre,
                edad,
                peso,
                altura,
                nivelActividad
            });
            const { password, ...usuarioSinPassword } = usuario;
            res.json({
                success: true,
                data: usuarioSinPassword,
                message: 'Perfil actualizado correctamente'
            });
        }
        catch (error) {
            next(error);
        }
    }
};
