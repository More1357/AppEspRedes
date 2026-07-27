import { Router } from 'express';
import { usuarioController } from '../../controllers/usuario.controller.js';
import { authMiddleware } from '../../middlewares/auth.js';
const router = Router();
router.use(authMiddleware.verifyToken);
router.get('/perfil', usuarioController.getPerfil);
router.put('/perfil', usuarioController.updatePerfil);
export default router;
