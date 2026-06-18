"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_js_1 = __importDefault(require("./auth.routes.js"));
const usuario_routes_js_1 = __importDefault(require("./usuario.routes.js"));
const rutina_routes_js_1 = __importDefault(require("./rutina.routes.js"));
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_js_1.default);
router.use('/usuario', usuario_routes_js_1.default);
router.use('/rutinas', rutina_routes_js_1.default);
exports.default = router;
