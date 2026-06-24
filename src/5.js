/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);
		const opened = pair[char];

		if (opened) {
			stack.push(opened);
			continue;
		}

		if (char === stack[stack.length - 1]) {
			stack.pop();
			continue;
		}

		return false;
	}

	return stack.length === 0;
};

const pair = {
	"(": ")",
	"[": "]",
	"{": "}",
};
