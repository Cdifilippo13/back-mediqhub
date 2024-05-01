import BaseRepository from "./base.repository.js";
let _users = null;

export default class UserRepository extends BaseRepository {
  constructor({ Users}){
    super(Users);
    _users = Users;
  }

  async createUser(usersToInsert) {
    return await _users
      .query()
      .insertGraph(usersToInsert);
  }

  async getUserByUserId(userId){
    const userWithPassword = await _users.query().where('email',userId);
    const { password, typeId,...rest } = userWithPassword[0]
    return rest;
  }
}