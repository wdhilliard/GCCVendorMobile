export default class SpecService {
	constructor(specs, marketId) {
		this.specs = Object.assign.apply(
			this,
			specs.filter(spec => {
				return spec.marketId == marketId;
			})
		).data;
	}

	getWindowSpecs() {
		let specs = this.specs.filter(spec => {
			return spec.scope == 2;
		});
		return specs;
	}
}
