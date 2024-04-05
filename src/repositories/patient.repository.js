import BaseRepository from "./base.repository.js";
let _patients = null;

export default class PatientRepository extends BaseRepository {
  constructor({ Patients}){
    super(Patients);
    _patients = Patients;
  }

  async createPatient(patientToInsert) {
    return await _patients
      .query()
      .insertGraph(patientToInsert);
  }

  async getPatientByUserId(userId){
    return _patients.query().where('userId',userId)
  }
}