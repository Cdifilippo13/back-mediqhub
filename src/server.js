import "express-async-errors";
import "./loaders/knex.loader.js";
import app from "./loaders/express.loaders.js";
import config from "./config/config.js";


app.listen(config.PORT, () => {
	console.log(
		config.APPLICATION_NAME + config.DB_PASSWORD + config.DB_USER +
			" API SE ESTÁ EJECUTANDO EN EL PUERTO " +
			config.PORT
	);
});