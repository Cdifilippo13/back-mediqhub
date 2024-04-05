import {Router} from 'express';
import container from './../container.js'


const router = Router();

const authController = container.resolve('AuthController');

//public
router.post('/login', authController.login);


export default router;