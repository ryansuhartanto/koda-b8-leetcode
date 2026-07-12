/**
 * 8. String to Integer (atoi)
 *
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
 *
 * The algorithm for myAtoi(string s) is as follows:
 *
 * 1. Whitespace: Ignore any leading whitespace (" ").
 * 2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
 * 3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
 * 4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
 *
 * Return the integer as the final result.
 *
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let cursor = 0;

	while (s.charCodeAt(cursor) === whitespaceCode) {
		cursor++;
	}

	const negCode = s.charCodeAt(cursor);
	let neg = false;

	if (negCode === minusCode) {
		neg = true;
		cursor++;
	}
	if (negCode === plusCode) {
		cursor++;
	}

	let result = 0;
	let numberCode = s.charCodeAt(cursor);

	while (numberCodes.includes(numberCode)) {
		result *= 10;
		result += numberCode - numberCodeNormalizer;

		numberCode = s.charCodeAt(++cursor);
	}

	result = neg ? -result : result;

	if ((result | 0) !== result) {
		result = Math.max(Math.min(result, -1 >>> 1), 1 << 31);
	}

	return result;
};

const whitespaceCode = " ".charCodeAt(0);
const plusCode = "+".charCodeAt(0);
const minusCode = "-".charCodeAt(0);

const numberCodes = Array.from({ length: 10 }, (_, i) =>
	i.toString().charCodeAt(0),
);
const numberCodeNormalizer = numberCodes[0] ?? 0;
