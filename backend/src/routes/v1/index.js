import { Router } from 'express';
import authRoutes from './auth.routes.js';
import usuarioRoutes from './usuario.routes.js';
import rutinaRoutes from './rutina.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/usuario', usuarioRoutes);
router.use('/rutinas', rutinaRoutes);

export default router;