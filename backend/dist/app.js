"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const errorHandler_js_1 = require("./middlewares/errorHandler.js");
const app = (0, express_1.default)();
// CORS con orígenes explícitos
const allowedOrigins = [
    // Local
    'http://localhost:5173',
    'http://localhost:4173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:4173',
    'http://127.0.0.1:3000',
    // Servidor
    'http://200.3.127.46:8002',
];
const corsOptions = {
    origin: function (origin, callback) {
        // Permitir requests sin origen (Postman, curl, scripts locales)
        if (!origin)
            return callback(null, true);
        // Verificar si el origen está permitido
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            console.warn(`[CORS] Bloqueado origen: ${origin}`);
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true, // Permitir envío de cookies/headers de autenticación
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Authorization']
};
// Middlewares globales
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Rutas
app.use('/api', index_js_1.default);
// 404 para rutas no encontradas
app.use(errorHandler_js_1.notFoundHandler);
// Manejador de errores
app.use(errorHandler_js_1.errorHandler);
exports.default = app;
