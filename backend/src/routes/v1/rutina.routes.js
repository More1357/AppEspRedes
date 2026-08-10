// src/routes/v1/rutina.routes.js
import { Router } from 'express';
import { rutinaController } from '../../controllers/rutina.controller.js';
import { authMiddleware } from '../../middlewares/auth.js';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authMiddleware.verifyToken);

router.get('/', rutinaController.getMisRutinas);
router.post('/', rutinaController.createRutina);
router.put('/:id', rutinaController.updateRutina);
router.delete('/:id', rutinaController.deleteRutina);

export default router;