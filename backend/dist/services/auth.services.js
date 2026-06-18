"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
// src/services/auth.services.js
const usuario_repository_js_1 = require("../repositories/usuario.repository.js");
const jwt_js_1 = require("../utils/jwt.js");
const bcrypt_js_1 = require("../utils/bcrypt.js");
exports.authService = {
    async login(email, password) {
        // 1. Buscar usuario
        const usuario = await usuario_repository_js_1.usuarioRepository.findByEmail(email);
        if (!usuario) {
            throw new Error('Credenciales incorrectas');
        }
        // 2. Verificar password
        const valido = await (0, bcrypt_js_1.comparePassword)(password, usuario.password);
        if (!valido) {
            throw new Error('Credenciales incorrectas');
        }
        // 3. Generar token (INCLUIR EL ROL)
        const token = (0, jwt_js_1.generarToken)({ id: usuario.id, email: usuario.email, rol: usuario.rol });
        // 4. No enviar la contraseña
        const { password: _, ...usuarioSinPassword } = usuario;
        return { token, usuario: usuarioSinPassword };
    },
    async register(data) {
        // 1. Verificar si ya existe
        const existe = await usuario_repository_js_1.usuarioRepository.findByEmail(data.email);
        if (existe) {
            throw new Error('El email ya está registrado');
        }
        // 2. Hashear password
        const hashedPassword = await (0, bcrypt_js_1.hashPassword)(data.password);
        // 3. Crear usuario
        const usuario = await usuario_repository_js_1.usuarioRepository.create({
            ...data,
            password: hashedPassword
        });
        // 4. Generar token (INCLUIR EL ROL)
        const token = (0, jwt_js_1.generarToken)({ id: usuario.id, email: usuario.email, rol: usuario.rol });
        const { password: _, ...usuarioSinPassword } = usuario;
        return { token, usuario: usuarioSinPassword };
    }
};
