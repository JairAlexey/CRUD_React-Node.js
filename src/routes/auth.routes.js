import {Router} from 'express';
import * as authCtrl from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/signin', authCtrl.signin);
router.post('/login', authCtrl.login);
router.post('/logout', authCtrl.logout);
router.get('/profile', authRequired, authCtrl.profile); // Ruta protegida

export default router;