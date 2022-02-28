/* 
  The Strategy pattern
  It suggests that you take a class that does something specific in a lot of different ways
  and extract all of these algorithms into separate classes called strategies.
*/

interface ValueDisplayStrategy {
	printValue(value: number): void;
}

class DefaultValueDisplayStrategy implements ValueDisplayStrategy {
	printValue(value: number): void {
		console.log(`Value: $${value}`);
	}
}

class EmojiValueDisplayStrategy implements ValueDisplayStrategy {
	printValue(value: number): void {
		console.log(`Value: $${value} ☺☻♦`);
	}
}

interface ValueDisplay {
	value: number;
	print(): void;
}

class PriceDisplay implements ValueDisplay {
	constructor(
		public value: number,
		public printStrategy: ValueDisplayStrategy
	) {}

	print(): void {
		this.printStrategy.printValue(this.value);
	}
}

const priceDisplayA = new PriceDisplay(2.5, new DefaultValueDisplayStrategy());
const priceDisplayB = new PriceDisplay(3.5, new EmojiValueDisplayStrategy());

priceDisplayA.print();
priceDisplayB.print();
