import Response from "../utils/Response.js";

let _typeService= null;

export default class TypeController {
    constructor({ TypeService }) {
        _typeService = TypeService;
    }

    async createType({body}, res) {

        const data = await _typeService.createType(body);

        console.log(data);
        res.status(200).send(new Response(200, data, "tipo creado exitosamente!"));
    }

}