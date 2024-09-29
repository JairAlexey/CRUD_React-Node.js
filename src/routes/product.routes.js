import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import * as productCtrl from '../controllers/products.controller.js'; // Asegúrate de que esta línea sea correcta

const router = Router();

router.get('/products', authRequired, productCtrl.getProducts)
router.get('/products/:id', authRequired, productCtrl.getProduct)
router.post('/products', authRequired, productCtrl.createProduct)
router.delete('/products/:id', authRequired, productCtrl.deleteProduct)
router.put('/products/:id', authRequired, productCtrl.updateProduct)


export default router;