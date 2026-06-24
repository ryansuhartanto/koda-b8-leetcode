/**
 * 10. Regular Expression Matching
 *
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 *
 * - '.' Matches any single character.​​​​
 * - '*' Matches zero or more of the preceding element.
 *
 * Return a boolean indicating whether the matching covers the entire input string (not partial).
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	/**
	 * Actual char code, dot (true), or wild [content, start at, length].
	 * @type {(number | true | [number | true, number, number])[]}
	 * */
	const regex = [];

	for (let i = 0; i < p.length; i++) {
		const char = p.charCodeAt(i);
		const dot = char === dotCode;
		const wild = p.charCodeAt(i + 1) === wildCode;

		if (wild) {
			i++;
		}

		const result = dot ? true : char;
		regex.push(wild ? [result, -1, 0] : result);
	}

	if (regex.length === 0) {
		return s.length === 0;
	}

	let parser = 0;
	let cursor = 0;

	let failed = false;

	function backTrack() {
		let foundPastWild = false;

		for (let findWild = parser - 1; findWild >= 0; findWild--) {
			const possibleWild = regex[findWild];

			if (!Array.isArray(possibleWild)) continue;
			if (possibleWild[2] < 0) continue;

			possibleWild[2] -= 1;
			foundPastWild = true;

			parser = findWild + 1;
			cursor = possibleWild[1] + possibleWild[2] + 1;
			break;
		}

		if (!foundPastWild) {
			failed = true;
		}
	}

	do {
		const check = regex[parser];
		let char = s.charCodeAt(cursor);

		if (!Array.isArray(check)) {
			if ((check !== true && char !== check) || cursor >= s.length) {
				backTrack();
				continue;
			}

			cursor += 1;
		} else {
			check[1] = cursor;
			while ((check[0] === true || char === check[0]) && cursor < s.length) {
				char = s.charCodeAt(++cursor);
				check[2]++;
			}
		}

		parser += 1;
	} while (!failed && parser < regex.length);

	return !failed && parser === regex.length && cursor === s.length;
};

const dotCode = ".".charCodeAt(0);
const wildCode = "*".charCodeAt(0);
