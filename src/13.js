/**
 * 5. Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length === 0) return s;

	if (s.length <= 2) {
		return s.charCodeAt(0) === s.charCodeAt(s.length - 1) ? s : s.charAt(0);
	}

	const typed = new Uint16Array(s.length);
	for (let i = 0; i < typed.length; i++) {
		typed[i] = s.charCodeAt(i);
	}

	let goodL;
	let goodR;

	for (let startL = 0; startL < typed.length - 1; startL++) {
		const code = typed[startL];
		let startR = typed.length;
		let found = false;

		if (goodR - goodL > startR - startL) {
			break;
		}

		while (!found && startR > startL) {
			startR = typed.lastIndexOf(code, startR - 1);

			let check = true;
			let checkL = startL;
			let checkR = startR;

			do {
				check = typed[checkL] === typed[checkR];
				checkL++;
				checkR--;
			} while (check && checkR > checkL);

			if (check) {
				found = true;
				continue;
			}
		}

		if (found && (!goodR || goodR - goodL < startR - startL)) {
			goodL = startL;
			goodR = startR;
		}
	}

	return goodR ? s.substring(goodL, goodR + 1) : s.charAt(0);
};

// console.log(longestPalindrome("ccc"));
