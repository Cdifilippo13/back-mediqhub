import config from "./config.js";
import path from "path";
import { fileURLToPath } from 'url';

const debug = config.NODE_ENV == "development";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knexfile = {
    client: "pg",
    connection: "postgres://postgres:1234@localhost:5432/mediqdb" ||
        {
            host: "localhost",
            user: "postgres",
            password: "1234",
            database: "mediqdb"
        }
    ,
    debug: debug,
    seeds: {
        directory: path.resolve(__dirname, "../", "db/seeds"),
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.resolve(__dirname, "../", "db/migrations"),
    },
    stream: true,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    connectionTimeout: 30000,
};

export default knexfile;