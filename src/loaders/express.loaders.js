import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import config from "../config/config.js";
import routes from "../routes/routes.js"
import { ErrorMiddleware, NotFoundMiddleware } from "../middlewares/index.js";

const app = express();
app.disable("x-powered-by");

const whiteList = config.WHITELIST_CORS;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (whiteList.indexOf(origin) === -1) {
      var message =
        "The CORS policy for this origin doesn't allow access from the particular origin.";
      return callback(new Error(message), false);
    }

    return callback(null, true);
  },
};

app
  .use(express.json())
  .use(cors(corsOptions))
  .use(helmet.hidePoweredBy())
  .use(compression());

app.use(routes);



export default app;