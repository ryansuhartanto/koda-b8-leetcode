/**
 * 11. Container With Most Water
 *
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let largest = 0;

	let a = -1;
	let b = height.length;

	let tallest = 0;
	let prevTallest = 0;

	let direction = false;

	do {
		const currentHeight = (direction ? height[--b] : height[++a]) ?? 0;
		if (currentHeight <= prevTallest) continue;

		prevTallest = currentHeight;
		if (tallest < prevTallest) {
			const temp = tallest;
			tallest = prevTallest;
			prevTallest = temp;
			direction = !direction;
		}

		const current = prevTallest * (b - a);
		if (largest < current) {
			largest = current;
		}
	} while (a < b - 1);

	return largest;
};

// console.log(maxArea([2, 1]));
