"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_services_js_1 = require("../services/auth.services.js");
exports.authController = {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const resultado = await auth_services_js_1.authService.login(email, password);
            res.json({
                success: true,
                data: resultado,
                message: 'Login exitoso'
            });
        }
        catch (error) {
            next(error); //  Pasa al manejador de errores
        }
    },
    async register(req, res, next) {
        try {
            const { email, password, nombre } = req.body;
            const resultado = await auth_services_js_1.authService.register({ email, password, nombre });
            res.status(201).json({
                success: true,
                data: resultado,
                message: 'Usuario registrado exitosamente'
            });
        }
        catch (error) {
            next(error);
        }
    }
};
