/**
 * 15. 3Sum
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	const typed = new Int32Array(nums).sort((a, b) => a - b);
	const result = [];

	for (let x = 0; x < typed.length - 2; x++) {
		if (x > 0 && typed[x] === typed[x - 1]) continue; // duplicate

		let left = x + 1;
		let right = typed.length - 1;
		const target = -(typed[x] ?? 0);

		while (left < right) {
			const sum = (typed[left] ?? 0) + (typed[right] ?? 0);

			if (sum === target) {
				result.push([typed[x] ?? 0, typed[left] ?? 0, typed[right] ?? 0]);
				do {
					left++;
				} while (left < right && typed[left] === typed[left - 1]);
				do {
					right--;
				} while (left < right && typed[right] === typed[right + 1]);
			} else if (sum < target) {
				left++;
			} else {
				right--;
			}
		}
	}

	return result;
};
