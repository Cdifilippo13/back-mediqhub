import { Model } from "objection";

export default class Appointments extends Model{
    static get tableName(){
        return 'appointments';
    }
}