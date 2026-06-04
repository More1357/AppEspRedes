"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    if (err.message === 'Credenciales incorrectas') {
        return res.status(401).json({
            success: false,
            message: err.message
        });
    }
    if (err.message === 'El email ya está registrado') {
        return res.status(409).json({
            success: false,
            message: err.message
        });
    }
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
    });
};
exports.errorHandler = errorHandler;
