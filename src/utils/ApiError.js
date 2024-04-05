export default class ApiError extends Error{
    constructor(httpStatus, ...params){
      super(...params);
      this.httpStatus = httpStatus
    }
  }