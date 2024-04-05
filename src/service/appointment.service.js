import STATE from "../constants/STATE.js";
import TYPE from "../constants/TYPE.js";
import BaseService from "./base.service.js";

let _appointmentRepository = null;
let _doctorRepository = null;
let _patientRepository = null;


export default class AppointmentService extends BaseService {
    constructor({ AppointmentRepository, DoctorRepository, PatientRepository }) {
        super(AppointmentRepository);
        _appointmentRepository = AppointmentRepository;
        _doctorRepository = DoctorRepository;
        _patientRepository = PatientRepository;
    }

    async createAppointment(appointmentToInsert) {

        const appointment = {
            citation: appointmentToInsert.citation,
            state: STATE.PENDIENTE,
            doctorId: appointmentToInsert.doctorId,
            patientId: appointmentToInsert.patientId
        }

        return _appointmentRepository.createAppointment(appointment);

    }


    async getAppointmentsByUserAndType(user) {
        let response = {};

        if (user.typeId === TYPE.DOCTOR) {

            const doctorFound = await _doctorRepository.getDoctorByUserId(user.userId);

            if (doctorFound.length < 1) {
                return response = []
            }

            return _appointmentRepository.getAppointmentsByUserAndType('doctorId', doctorFound[0]);
        }

        const patientFound = await _patientRepository.getPatientByUserId(user.userId);

        if (patientFound.length < 1) {
            return response = []
        }
        return _appointmentRepository.getAppointmentsByUserAndType('patientId', patientFound[0]);

    }

    async updateAppointment(appointment) {
        return _appointmentRepository.updateAppointment(appointment);
    }

    

}