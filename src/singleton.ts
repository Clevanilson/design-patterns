// The Singleton pattern
// lets you ensure that a class has only one instance,
//  while providing a global access point to this instance.

class Singleton {
	private static instance?: Singleton;
	public value = 0;

	private constructor() {}

	static getInstance(): Singleton {
		if (!this.instance) {
			this.instance = new Singleton();
		}

		return this.instance;
	}
}

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log('Instance A: ', instanceA.value);
console.log('Instance B: ', instanceB.value);

instanceA.value = 99;

console.log('Instance A: ', instanceA.value);
console.log('Instance B: ', instanceB.value);
