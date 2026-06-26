/**
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const neg = x < 0;
	x = neg ? -x : x;

	const exp = Math.trunc(Math.log10(x));
	const exp_2 = exp / 2;

	for (let i = 0; i < exp_2; i++) {
		const exp10 = Math.pow(10, exp - i);
		const i10 = Math.pow(10, i);

		const last = Math.trunc(x / exp10) % 10;
		const lastExp = last * exp10;

		const first = Math.trunc(x / i10) % 10;
		const firstExp = first * exp10;

		x += firstExp - lastExp;
		x += last * i10 - first * i10;
	}

	x = neg ? -x : x;

	return (x | 0) === x ? x : 0;
};

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(1234));
