/**
 * 13. Roman to Integer
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let prev = 1000;
	let total = 0;

	for (let i = 0; i < s.length; i++) {
		const value = romanConverter[s.charAt(i)];
		const maybePre = value - prev;

		// console.log(value, prev, maybePre);

		if (maybePre > 0) {
			total += maybePre - prev;
		} else {
			total += value;
		}

		prev = value;
	}

	return total;
};

const romanConverter = {
	M: 1000,
	D: 500,
	C: 100,
	L: 50,
	X: 10,
	V: 5,
	I: 1,
};
