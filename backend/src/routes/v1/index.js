// routes/v1/index.js
import { Router } from 'express';
import authRoutes from './auth.routes.js';
import usuarioRoutes from './usuario.routes.js';
import rutinaRoutes from './rutina.routes.js';

const router = Router();
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() })
});
router.use('/auth', authRoutes);
router.use('/usuario', usuarioRoutes);
router.use('/rutinas', rutinaRoutes);
export default router