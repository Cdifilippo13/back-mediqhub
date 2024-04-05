import {Router} from 'express';
import container from './../container.js'


const router = Router();

const userController = container.resolve('UserController');

//public
router.post('/createUser', userController.createUser);


export default router;