import { Model } from "objection";

export default class Types extends Model{
    static get tableName(){
        return 'types';
    }
}