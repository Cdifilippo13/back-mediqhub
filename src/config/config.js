import dotenv from "dotenv";

dotenv.config();

export default {
	PORT: process.env.PORT || "",
	
	DB_HOST: process.env.DB_HOST,
	DB_PORT: process.env.DB_PORT,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	PG_CONNECTION_STRING: process.env.PG_CONNECTION_STRING,

	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
	EMAIL_USERNAME: process.env.EMAIL_USERNAME,

	URL_FRONTEND: process.env.URL_FRONTEND,

	APPLICATION_NAME: process.env.APPLICATION_NAME,

	WHITELIST_CORS: process.env.WHITELIST_CORS,
};