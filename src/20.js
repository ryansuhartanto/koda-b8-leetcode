/**
 * 28. Find the Index of the First Occurrence in a String
 *
 * Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	const m = needle.length;
	if (m === 0) return 0;
	const n = haystack.length;
	if (m > n) return -1;

	const lps = new Int32Array(m);

	{
		let i = 1;
		let len = 0;

		while (i < m) {
			if (needle.charCodeAt(i) === needle.charCodeAt(len)) {
				lps[i++] = ++len;
			} else if (len > 0) {
				len = lps[len - 1];
			} else {
				lps[i++] = 0;
			}
		}
	}

	{
		let i = 0;
		let j = 0;

		while (i < n) {
			if (haystack.charCodeAt(i) === needle.charCodeAt(j)) {
				i++;
				j++;
				if (j === m) return i - m;
			} else if (j > 0) {
				j = lps[j - 1];
			} else {
				i++;
			}
		}
	}
	return -1;
};
