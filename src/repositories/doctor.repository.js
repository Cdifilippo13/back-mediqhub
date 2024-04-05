import BaseRepository from "./base.repository.js";
let _doctors = null;

export default class DoctorRepository extends BaseRepository {
  constructor({ Doctors}){
    super(Doctors);
    _doctors = Doctors;
  }

  async createDoctor(doctorToInsert) {
    return await _doctors
      .query()
      .insertGraph(doctorToInsert);
  }

  async getDoctorByUserId(userId){
    return _doctors.query().where('userId',userId);
  }

  async getDoctors(){
    return _doctors.query()
    .select('users.*', 'doctors.medicalSpeciality','doctors.id')
    .leftJoin('users','users.email','doctors.userId');
  }


}