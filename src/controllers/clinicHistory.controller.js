import Response from "../utils/Response.js";

let _clinicHistoryService = null;

export default class ClinicHistoryController {
    constructor({ ClinicHistoryService }) {
        _clinicHistoryService = ClinicHistoryService;
    }

    async createClinicHistory({ body }, res) {

        const data = await _clinicHistoryService.createClinicHistory(body);

        res.status(200).send(
            new Response(200, data, "Historia clinica creada exitosamente!"));
    }

    async getClinicHistoryByPatient({ query }, res) {
        const data = await _clinicHistoryService.getClinicHistoryByPatient(query);
        res.status(200).send(
            new Response(200, data, "Historia Clinica consultada exitosamente!"));
    }
}