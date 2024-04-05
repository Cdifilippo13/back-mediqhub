import {Router} from 'express';
import container from './../container.js'


const router = Router();

const typeController = container.resolve('TypeController');

//public
router.post('/createType', typeController.createType);


export default router;