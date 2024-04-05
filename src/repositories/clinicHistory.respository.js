import BaseRepository from "./base.repository.js";
let _clinicHistorys = null;

export default class ClinicHistoryRepository extends BaseRepository {
  constructor({ ClinicHistorys}){
    super(ClinicHistorys);
    _clinicHistorys = ClinicHistorys;
  }

  async createClinicHistory(clinicHistoryToInsert) {
    return await _clinicHistorys
      .query()
      .insertGraph(clinicHistoryToInsert);
  }

  async getClinicHistoryByPatient(user) {
    return await _clinicHistorys.query().where('patientId',`${user.id}`)
  }
}