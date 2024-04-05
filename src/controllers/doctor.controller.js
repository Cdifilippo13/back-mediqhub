import Response from "../utils/Response.js";

let _doctorService = null;

export default class DoctorController {
    constructor({ DoctorService }) {
        _doctorService = DoctorService;
    }

    async createDoctor({ query }, res) {
        const data = await _doctorService.createDoctor(query);
        res.status(200).send({
            status: 200,
            data:data,
            message:""
        });
    }

    async getDoctors({ query }, res) {
        const data = await _doctorService.getDoctors();
        res.status(200).send(
            new Response(200, data, "Doctores consultados exitosamente"));
    }

}