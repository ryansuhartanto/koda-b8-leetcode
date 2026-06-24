/**
 * 6. Zigzag Conversion
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * ```
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * ```
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1) {
		return s;
	}

	const result = Array.from({ length: numRows }, () => "");
	const zigzag = numRows * 2 - 2;
	let position = 0;

	for (let i = 0; i < s.length; i++) {
		const resultIndex =
			position < numRows ? position : numRows - (position % numRows) - 2;

		result[resultIndex] += s.charAt(i);

		position = (position + 1) % zigzag;
	}

	return result.join("");
};
