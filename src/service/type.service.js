let _typeRepository = null;

export default class TypeService {
  constructor({ TypeRepository }) {
    _typeRepository = TypeRepository;
  }

  async createType(typeToInsert) {
    return _typeRepository.createType(typeToInsert);
  }

}