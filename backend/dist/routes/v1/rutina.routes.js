"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutina_controller_js_1 = require("../../controllers/rutina.controller.js");
const auth_js_1 = require("../../middlewares/auth.js");
const router = (0, express_1.Router)();
// Todas las rutas requieren autenticación
router.use(auth_js_1.authMiddleware.verifyToken);
router.get('/', rutina_controller_js_1.rutinaController.getMisRutinas);
router.post('/', rutina_controller_js_1.rutinaController.createRutina);
router.put('/:id', rutina_controller_js_1.rutinaController.updateRutina);
router.delete('/:id', rutina_controller_js_1.rutinaController.deleteRutina);
exports.default = router;
