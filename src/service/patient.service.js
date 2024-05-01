import BaseService from "./base.service.js";

let _patientRepository = null;

export default class PatientService extends BaseService {
  constructor({ PatientRepository }) {
    super(PatientRepository);
    _patientRepository = PatientRepository;
  }

  async createPatient(patientToInsert) {
    return _patientRepository.createPatient(patientToInsert);
  }

  async getPatients() {
    return _patientRepository.getPatients();
   }

}