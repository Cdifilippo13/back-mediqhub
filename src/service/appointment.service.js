import STATE from "../constants/STATE.js";
import TYPE from "../constants/TYPE.js";
import BaseService from "./base.service.js";

let _appointmentRepository = null;
let _doctorRepository = null;
let _patientRepository = null;
let _userRepository = null;

export default class AppointmentService extends BaseService {
  constructor({
    AppointmentRepository,
    DoctorRepository,
    PatientRepository,
    UserRepository,
  }) {
    super(AppointmentRepository);
    _appointmentRepository = AppointmentRepository;
    _doctorRepository = DoctorRepository;
    _patientRepository = PatientRepository;

    _userRepository = UserRepository;
  }

  async createAppointment(appointmentToInsert) {
    const appointment = {
      citation: appointmentToInsert.citation,
      state: STATE.PENDIENTE,
      doctorId: appointmentToInsert.doctorId,
      patientId: appointmentToInsert.patientId,
    };

    return _appointmentRepository.createAppointment(appointment);
  }

  async getAppointmentsByUserAndType(user) {
    let response = {};
    if (Number(user.typeId) === TYPE.DOCTOR) {
      const doctorFound = await _doctorRepository.getDoctorByUserId(
        user.userId
      );
      const doctor = await _userRepository.getUserByUserId(
        doctorFound[0].userId
      );
      const appointments =
        await _appointmentRepository.getAppointmentsByUserAndType(
          "doctorId",
          doctorFound[0]
        );

      const appointmentPromises = appointments.map(async (appointment) => {
        const { patientId, doctorId, ...rest } = appointment;

        const patientUserId = await _patientRepository.getPatientById(
          patientId
        );
        const userPatient = await _userRepository.getUserByUserId(
          patientUserId[0].userId
        );

        return { ...rest, patient: userPatient };
      });

      const resolvedAppointments = await Promise.all(appointmentPromises);

      response = {
        doctor,
        appointments: resolvedAppointments,
      };

      return response;
    }

    if (Number(user.typeId) === TYPE.PATIENT) {
      const patientFound = await _patientRepository.getPatientByUserId(
        user.userId
      );
      const patient = await _userRepository.getUserByUserId(
        patientFound[0].userId
      );
      const appointments =
        await _appointmentRepository.getAppointmentsByUserAndType(
          "patientId",
          patientFound[0]
        );

      const appointmentPromises = appointments.map(async (appointment) => {
        const { patientId, doctorId, ...rest } = appointment;

        const doctorUserId = await _doctorRepository.getDoctorById(doctorId);
        const userDoctor = await _userRepository.getUserByUserId(
          doctorUserId[0].userId
        );

        return { ...rest, doctor: userDoctor };
      });

      const resolvedAppointments = await Promise.all(appointmentPromises);

      response = {
        patient,
        appointments: resolvedAppointments,
      };

      return response;
    }
  }

  async updateAppointment(appointment) {
    return _appointmentRepository.updateAppointment(appointment);
  }
}
