/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 *
 * Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
 *
 * The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let prev = nums[0];
	let unique = 1;

	for (let i = 1; i < nums.length; i++) {
		let num = nums[i];
		// console.log(num);

		if (prev === num) {
			continue;
		}

		nums[unique++] = prev = num;
	}

	return unique;
};

// const test = [1, 1];
// const test = [1, 1, 2];
// const test = [0, 1, 1, 1, 2, 2, 3, 3, 4, 4];
// const test = [0, 0, 1, 1, 1, 1, 2, 2, 2, 4];
// console.log(removeDuplicates(test), test);
