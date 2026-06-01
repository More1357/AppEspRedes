"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_repository_js_1 = require("../repositories/usuario.repository.js");
const jwt_js_1 = require("../utils/jwt.js");
exports.authService = {
    async login(email, password) {
        // Buscar usuario
        const usuario = await usuario_repository_js_1.usuarioRepository.findByEmail(email);
        if (!usuario) {
            throw new Error('Credenciales incorrectas');
        }
        // Verificar password
        const valido = await bcrypt_1.default.compare(password, usuario.password);
        if (!valido) {
            throw new Error('Credenciales incorrectas');
        }
        // Generar token con id, email y rol
        const token = (0, jwt_js_1.generarToken)({
            id: usuario.id,
            email: usuario.email,
            rol: usuario.rol
        });
        // No enviar la contraseña
        const { password: _, ...usuarioSinPassword } = usuario;
        return { token, usuario: usuarioSinPassword };
    },
    async register(data) {
        // Verificar si ya existe
        const existe = await usuario_repository_js_1.usuarioRepository.findByEmail(data.email);
        if (existe) {
            throw new Error('El email ya está registrado');
        }
        // Hashear password
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        // Crear usuario solo con los campos permitidos
        const usuario = await usuario_repository_js_1.usuarioRepository.create({
            email: data.email,
            password: hashedPassword,
            nombre: data.nombre
        });
        // Generar token
        const token = (0, jwt_js_1.generarToken)({
            id: usuario.id,
            email: usuario.email,
            rol: usuario.rol
        });
        const { password: _, ...usuarioSinPassword } = usuario;
        return { token, usuario: usuarioSinPassword };
    }
};
