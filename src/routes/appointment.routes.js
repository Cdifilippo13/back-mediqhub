import {Router} from 'express';
import container from './../container.js'


const router = Router();

const appointmentController = container.resolve('AppointmentController');

//public
router.get('/getAppointmentsByUserAndType', appointmentController.getAppointmentsByUserAndType)
router.post('/createAppointment', appointmentController.createAppointment);
router.put('/updateAppointment', appointmentController.updateAppointment);

export default router;