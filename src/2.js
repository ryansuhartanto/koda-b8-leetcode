/**
 * 9. Palindrome Number
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) return false;
	if (x < 10) return true;

	const length = Math.floor(Math.log10(x));
	let check = x;

	for (let i = length; i > 0; i -= 2) {
		// console.log(check);

		const exp = Math.pow(10, i);
		const lastDigit = Math.floor(check / exp);

		// console.log(lastDigit);

		check -= lastDigit * exp + lastDigit;
		// console.log(check);
		check /= 10;
		// console.log(check);

		if (!Number.isInteger(check)) {
			return false;
		}

		// console.log();
	}

	return true;
};
