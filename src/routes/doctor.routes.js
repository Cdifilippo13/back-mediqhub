import {Router} from 'express';
import container from './../container.js'

const doctorContainer = container.resolve('DoctorController');
const router = Router();

//public
router.get('/getDoctors', doctorContainer.getDoctors);



export default router;