import BaseService from "./base.service.js";

let _doctorRepository = null;
let _userRepository = null;

export default class DoctorService extends BaseService {
  constructor({ DoctorRepository, UserRepository }) {
    super(DoctorRepository);
    _doctorRepository = DoctorRepository;
    _userRepository = UserRepository;
  }

  async createDoctor(userToInsert) {

    const userWithPasswordEncrypted = {
      name: userToInsert.name,
      email: userToInsert.email,
      password: await encryptPassword(userToInsert.password),
      typeId: userToInsert.typeId
    }

    const userCreated = await _userRepository.createUser(userWithPasswordEncrypted);

    let doctorToInsert = {
      userId: userCreated.email,
      medicalSpeciality: userToInsert.medicalSpeciality
    }

    return _doctorRepository.createDoctor(doctorToInsert);
  }

  async getDoctors() {
   return _doctorRepository.getDoctors();
  }


}