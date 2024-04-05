import TYPE from "../constants/TYPE.js";
import BaseRepository from "./base.repository.js";
let _appointments = null;
let _doctors = null;
let _patients = null;

export default class AppointmentRepository extends BaseRepository {
  constructor({ Appointments, Doctors, Patients }) {
    super(Appointments);
    _appointments = Appointments;
    _doctors = Doctors;
    _patients = Patients;
  }

  async createAppointment(appointmentToInsert) {
    return await _appointments
      .query()
      .insertGraph(appointmentToInsert);
  }

  async getAppointmentsByUserAndType(type, user) {
    return await _appointments.query().where(`${type}`, `${user.id}`)
  }

  async updateAppointment(appointment){
    return await _appointments.query().update({state:appointment.newState}).where("id",appointment.id);
  }
}