let _patientService = null;

export default class PatientController {
  constructor({ PatientService }) {
    _patientService = PatientService;
  }

  async createPatient({ headers, query }, res) {
    const data = await _patientService.createDoctor(query);
    res
      .status(200)
      .send(new Response(200, data, "Paciente creado exitosamente!"));
  }

  async getPatients({ query }, res) {
    const data = await _patientService.getPatients();
    res.status(200).json({ status:200, data, message: 'Pacientes consultados correctamente' });
  }
}
