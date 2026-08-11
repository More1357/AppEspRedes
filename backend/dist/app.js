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
const allowedOrigins = [
    'http://localhost:5173', 'http://localhost:4173', 'http://localhost:3000',
    'http://127.0.0.1:5173', 'http://127.0.0.1:4173', 'http://127.0.0.1:3000',
    'http://200.3.127.46:8002',
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            console.warn(`[CORS] Bloqueado origen: ${origin}`);
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Authorization']
};
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// ✅ Si Apache quita el /api, esto lo vuelve a poner
app.use((req, res, next) => {
    if (req.url.startsWith('/v1/')) {
        req.url = `/api${req.url}`;
    }
    next();
});
// ✅ Montamos las rutas en /api
app.use('/api', index_js_1.default);
app.use(errorHandler_js_1.notFoundHandler);
app.use(errorHandler_js_1.errorHandler);
exports.default = app;
