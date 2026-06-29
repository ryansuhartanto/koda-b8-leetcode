/**
 * 12. Integer to Roman
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let roman = "";

	const log10 = Math.trunc(Math.log10(num));

	for (let i = log10; i >= 0; i--) {
		const current10 = Math.pow(10, i);
		let currentNum = Math.trunc((num / current10) % 10);

		const above5 = currentNum >= 5;
		if (above5) {
			currentNum -= 5;
		}

		if (currentNum === 4) {
			roman += romanObj[current10];
			roman += romanObj[current10 * (above5 ? 10 : 5)];
			continue;
		}

		if (above5) {
			roman += romanObj[current10 * 5];
		}

		for (let x = 0; x < currentNum; x++) {
			roman += romanObj[current10];
		}
	}

	return roman;
};

const romanObj = {
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M",
};

// console.log(intToRoman(58));
