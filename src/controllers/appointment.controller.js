import Response from "../utils/Response.js";

let _appointmentService = null;

export default class AppointmentController {
    constructor({ AppointmentService }) {
        _appointmentService = AppointmentService;
    }

    async createAppointment({ body}, res) {

        const data = await _appointmentService.createAppointment(body);

        res.status(200).send(
            new Response(200, data, "Cita creada exitosamente!"));
    }

    async getAppointmentsByUserAndType({ query}, res) {
        const data = await _appointmentService.getAppointmentsByUserAndType(query);
        res.status(200).send(
            new Response(200, data, "Citas consultadas exitosamente!")); 
    }

    async updateAppointment({body},res){
        const data = await _appointmentService.updateAppointment(body);
        res.status(200).send(
            new Response(200, data, "Estado actualizado exitosamente!")); 
    }

}