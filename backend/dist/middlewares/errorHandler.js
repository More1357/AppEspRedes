"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${err.message}`);
    if (err.stack)
        console.error(err.stack);
    // Errores conocidos de FitFlow
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
    // Usuario no encontrado
    if (err.message === 'Usuario no encontrado') {
        return res.status(404).json({
            success: false,
            message: err.message
        });
    }
    // Ejercicio no encontrado
    if (err.message === 'Ejercicio no encontrado') {
        return res.status(404).json({
            success: false,
            message: err.message
        });
    }
    // Errores de JWT
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            success: false,
            message: 'Token inválido'
        });
    }
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
            success: false,
            message: 'Token expirado'
        });
    }
    // Errores de prisma
    if (err.code === 'P2002') {
        return res.status(409).json({
            success: false,
            message: 'Ya existe un registro con ese dato único'
        });
    }
    if (err.code === 'P2025') {
        return res.status(404).json({
            success: false,
            message: 'Registro no encontrado'
        });
    }
    if (err.code === 'P2003') {
        return res.status(400).json({
            success: false,
            message: 'No se puede eliminar porque tiene registros relacionados'
        });
    }
    // Errores de validación
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }
    // Ruta no encontrada
    if (err.message?.includes('Cannot') || err.status === 404) {
        return res.status(404).json({
            success: false,
            message: 'Ruta no encontrada'
        });
    }
    // Error general
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
    });
};
exports.errorHandler = errorHandler;
// Middleware específico para rutas no encontradas
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
    });
};
exports.notFoundHandler = notFoundHandler;
