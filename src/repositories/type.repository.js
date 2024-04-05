import BaseRepository from "./base.repository.js";
let _types = null;

export default class TypeRepository extends BaseRepository {
  constructor({ Types}){
    super(Types);
    _types = Types;
  }

  async createType(typeToInsert) {

    console.log(typeToInsert);
    return _types
      .query()
      .insertGraph(typeToInsert);
  }
}