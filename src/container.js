import { createContainer, asClass, asValue } from "awilix";


//models
import Users from "./db/models/users.js";
import Appointments from "./db/models/appointments.js";
import ClinicHistorys from "./db/models/clinicHistorys.js";
import Doctors from "./db/models/doctors.js";
import Patients from "./db/models/patients.js";
import Types from "./db/models/types.js";

//services
import DoctorService from "./service/doctor.service.js";
import TypeService from "./service/type.service.js";
import UserService from "./service/user.service.js";
import PatientService from "./service/patient.service.js";
import ClinicHistoryService from "./service/clinicHistorys.service.js";
import AppointmentService from "./service/appointment.service.js";
import AuthService from "./service/auth.service.js";

//controllers

import DoctorController from "./controllers/doctor.controller.js"
import TypeController from "./controllers/type.controller.js";
import UserController from "./controllers/user.controller.js";
import PatientController from "./controllers/patient.controller.js";
import ClinicHistoryController from "./controllers/clinicHistory.controller.js";
import AppointmentController from "./controllers/appointment.controller.js";
import AuthController from "./controllers/auth.controller.js";

//repositories

import DoctorRepository from "./repositories/doctor.repository.js";
import TypeRepository from "./repositories/type.repository.js";
import UserRepository from "./repositories/user.repository.js";
import PatientRepository from "./repositories/patient.repository.js";
import ClinicHistoryRepository from "./repositories/clinicHistory.respository.js";
import AppointmentRepository from "./repositories/appointment.repository.js";

//container

const container = createContainer();

container
    .register({
        Doctors: asValue(Doctors),
        Types: asValue(Types),
        Users: asValue(Users),
        Patients: asValue(Patients),
        ClinicHistorys: asValue(ClinicHistorys),
        Appointments: asValue(Appointments)
    })
    .register({
        DoctorService: asClass(DoctorService).singleton(),
        TypeService: asClass(TypeService).singleton(),
        UserService: asClass(UserService).singleton(),
        PatientService: asClass(PatientService).singleton(),
        ClinicHistoryService: asClass(ClinicHistoryService).singleton(),
        AppointmentService: asClass(AppointmentService).singleton(),
        AuthService: asClass(AuthService).singleton()
    })
    .register({
        DoctorController: asClass(DoctorController.bind(DoctorController)).singleton(),
        TypeController: asClass(TypeController.bind(TypeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        PatientController: asClass(PatientController.bind(PatientController)).singleton(),
        ClinicHistoryController: asClass(ClinicHistoryController.bind(ClinicHistoryController)).singleton(),
        AppointmentController: asClass(AppointmentController.bind(AppointmentController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    })
    .register({
        DoctorRepository: asClass(DoctorRepository).singleton(),
        TypeRepository: asClass(TypeRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        PatientRepository: asClass(PatientRepository).singleton(),
        ClinicHistoryRepository: asClass(ClinicHistoryRepository).singleton(),
        AppointmentRepository: asClass(AppointmentRepository).singleton()
    });
export default container;