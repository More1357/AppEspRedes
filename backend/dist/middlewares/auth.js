"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_js_1 = require("../utils/jwt.js");
exports.authMiddleware = {
    verifyToken(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Token no proporcionado'
            });
        }
        const token = authHeader.split(' ')[1];
        try {
            const decoded = (0, jwt_js_1.verifyToken)(token);
            req.user = decoded;
            next();
        }
        catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Token inválido o expirado'
            });
        }
    },
    authorize(...roles) {
        return (req, res, next) => {
            if (!roles.includes(req.user.rol)) {
                return res.status(403).json({
                    success: false,
                    message: 'No tienes permisos para acceder a este recurso'
                });
            }
            next();
        };
    }
};
