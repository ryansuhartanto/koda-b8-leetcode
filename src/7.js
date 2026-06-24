/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let longest = 0;
	let current = [];
	let currentDuplicate = -1;

	for (let i = 0; i < s.length; i++) {
		const char = s.charCodeAt(i);

		const foundDuplicate = current.lastIndexOf(char);
		// currentDuplicate = Math.max(foundDuplicate, currentDuplicate);
		if (currentDuplicate < foundDuplicate) {
			currentDuplicate = foundDuplicate;
		}

		current.push(char);

		const length = current.length - currentDuplicate - 1;
		// longest = Math.max(length, longest);
		if (longest < length) {
			longest = length;
		}
	}

	return longest;
};
