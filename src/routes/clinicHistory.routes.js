import {Router} from 'express';
import container from './../container.js'


const router = Router();

const clinicHistoryController = container.resolve('ClinicHistoryController');

//public
router.get('/getClinicHistoryByPatient', clinicHistoryController.getClinicHistoryByPatient)
router.post('/createClinicHistory', clinicHistoryController.createClinicHistory);


export default router;