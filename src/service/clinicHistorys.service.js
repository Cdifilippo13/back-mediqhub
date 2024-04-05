import BaseService from "./base.service.js";

let _clinicHistoryRepository = null;
let _patientRepository = null;

export default class ClinicHistoryService extends BaseService {
  constructor({ ClinicHistoryRepository,PatientRepository }) {
    super(ClinicHistoryRepository);
    _clinicHistoryRepository = ClinicHistoryRepository;
    _patientRepository = PatientRepository;
  }

  async createClinicHistory(clinicHistoryToInsert) {
    return _clinicHistoryRepository.createClinicHistory(clinicHistoryToInsert);
  }

  async getClinicHistoryByPatient(user) {
    let response = {};

    const patientFound = await _patientRepository.getPatientByUserId(user.userId);

    if (patientFound.length < 1) {
      return response = []
    }
    return _clinicHistoryRepository.getClinicHistoryByPatient(patientFound[0]);
  }

}