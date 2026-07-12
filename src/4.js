/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	const strsLength = strs.length;

	if (strsLength === 1) {
		return strs[0] ?? "";
	}

	let commonPrefix = "";
	let stop = false;

	for (let i = 0; ; i++) {
		const prefix = strs[0]?.charAt(i);

		if (!prefix) {
			break;
		}

		for (let j = 1; j < strsLength; j++) {
			if (strs[j]?.charAt(i) !== prefix) {
				stop = true;
				break;
			}
		}

		if (stop) {
			break;
		}

		commonPrefix += prefix;
	}

	return commonPrefix;
};
