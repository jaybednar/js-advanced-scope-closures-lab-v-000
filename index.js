function produceDrivingRange(blockRange) {
	return function (starting, ending) {
		let distance = Math.abs(parseInt(starting) - parseInt(ending))
		let overUnder = Math.abs(distance - blockRange);
		if (distance <= blockRange) {
			return `within range by ${overUnder}`;
		} else {
			return `${overUnder} blocks out of range`;
		}
	}
}

function produceTipCalculator(percentTip) {
	return function (bill) {
		return bill * percentTip;
	}
}

function createDriver () {
	let driverId = 0;

	return class {
		constructor(name) {
			this.id = ++driverId;
			this.name = name;
		}
	}
}