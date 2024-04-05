import TYPE from "../constants/TYPE.js";
import { comparePassword } from "../utils/Encrypt.js";
import BaseService from "./base.service.js";

let _userRepository = null;
let _patientRepository = null;
let _doctorRepository = null;


export default class AuthService extends BaseService {
    constructor({ UserRepository, PatientRepository, DoctorRepository }) {
        super(UserRepository);
        _userRepository = UserRepository;
        _patientRepository = PatientRepository;
        _doctorRepository = DoctorRepository;
    }

    async login(userToLogin) {

        const userFound = await _userRepository.get(userToLogin.email);

        const isCorrect = await comparePassword(userToLogin.password, userFound.password);

        let userLoginResponse = {}

        if (!isCorrect) {

            return userLoginResponse = {
                data: {
                    name: null,
                    email: null,
                    type: null,
                    isCorrect: isCorrect
                },
                message: "Credenciales incorrectas",
                status: 403
            }           
        } 

        let buildData = null;

        if(userFound.typeId == TYPE.DOCTOR){
            const doctorFound = await _doctorRepository.getDoctorByUserId(userFound.email);

            buildData = {
                id: doctorFound[0].id,
               
            }
            
        }else{
            const patiendFound = await _patientRepository.getPatientByUserId(userFound.email);

            console.log(patiendFound)

            buildData = {
                id: patiendFound[0].id, 
            }
        }

        return userLoginResponse = {
            data: {
                ...buildData,
                name: userFound.name,
                email: userFound.email,
                type: userFound.typeId,
                isCorrect: isCorrect
            },
            message: "Autorizado",
            status: 200
        }

    }

}