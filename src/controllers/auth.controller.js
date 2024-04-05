import Response from "../utils/Response.js";

let _authService = null;

export default class AuthController {
    constructor({ AuthService }) {
        _authService = AuthService;
    }

    async login({ body}, res) {

        const data = await _authService.login(body);

        console.log(data);

        res.status(200).send(
            new Response(data.status, data.data, data.message));
    }

}