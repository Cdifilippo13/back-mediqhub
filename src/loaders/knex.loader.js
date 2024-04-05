import knex from "../db/knex.js";
import { Model } from "objection";

Model.knex(knex);