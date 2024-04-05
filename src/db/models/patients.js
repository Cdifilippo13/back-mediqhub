import { Model } from "objection";

export default class Patients extends Model{
    static get tableName(){
        return 'patients';
    }
}