import TYPE from "../constants/TYPE.js";
import { encryptPassword } from "../utils/Encrypt.js";
let _userRepository = null;
let _doctorRepository = null;
let _patientRepository = null;


export default class userService {
    constructor({ UserRepository, DoctorRepository, PatientRepository }) {
        _userRepository = UserRepository;
        _doctorRepository = DoctorRepository
        _patientRepository = PatientRepository;
    }

    async createUser(userToInsert) {
        console.log(userToInsert);
        const userWithPasswordEncrypted = {
            name: userToInsert.name,
            email: userToInsert.email,
            password: await encryptPassword(userToInsert.password),
            typeId: userToInsert.type
        }

        const userCreated = await _userRepository.createUser(userWithPasswordEncrypted);

        console.log(userWithPasswordEncrypted);

        if (userCreated.typeId === String(TYPE.DOCTOR)) {
            let doctorToInsert = {
                userId: userCreated.email,
                medicalSpeciality: userToInsert.specialty
              }
              _doctorRepository.createDoctor(doctorToInsert);
        } else {
            let patientToInsert = {
                userId: userCreated.email
            }
            _patientRepository.createPatient(patientToInsert);
        }


        return { userCreated }
    }
}