import {Router} from 'express';
import container from './../container.js'

const patientContainer = container.resolve('PatientController');
const router = Router();

//public
router.get('/getPatients', patientContainer.getPatients);


export default router;