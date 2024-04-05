import { Model } from "objection";

export default class ClinicHistorys extends Model{
    static get tableName(){
        return 'clinicHistorys';
    }
}