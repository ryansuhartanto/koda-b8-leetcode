/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// const initialLength = nums.length;

	// let curr;
	// let found;

	// do {
	// 	curr = nums.shift();
	// 	found = nums.findIndex((num) => curr + num === target);
	// } while (found < 0);

	// const num1 = initialLength - nums.length - 1;
	// const num2 = num1 + found + 1;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}

	// return [num1, num2];
};
