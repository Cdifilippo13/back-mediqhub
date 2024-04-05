import { Model } from "objection";

export default class Doctors extends Model {
    static get tableName() {
        return 'doctors';
    }

}