import Response from "../utils/Response.js";

let _userService= null;

export default class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async createUser({body}, res) {

        const data = await _userService.createUser(body);

        res.status(200).send(new Response(200, data, "usuario creado exitosamente!"));
    }

}