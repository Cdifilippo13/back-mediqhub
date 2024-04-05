export default class BaseRepository {
	constructor(model) {
		this.model = model;
	}

	async get(id) {
		return this.model.query().findById(id);
	}
	async getAll(pagSize, pagNum = 0) {
		if (!pagSize) {
			return this.model.query();
		}
		const list = await this.model
			.query()
/* 			.page(pagNum, pagSize)
			.where("state", STATE.ACTIVO); */
		return list.results;
	}

	async create(entity) {
		return this.model.query().insert(entity);
	}
	async update(id, entity) {
		return this.model.query().patchAndFetchById(id, entity);
	}
	async delete(id) {
		return this.model
			.query()
			.deleteById(id);
	}
}