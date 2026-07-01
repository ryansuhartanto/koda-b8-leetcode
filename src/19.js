/**
 * 27. Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *
 * - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	nums.sort((a, b) => a - b);

	let start = -1;
	while (nums[++start] !== val && start < nums.length) {}

	if (start === nums.length) return nums.length;

	let length = 0;
	while (nums[++length + start] === val) {}

	nums.splice(start, length);
	return nums.length;
};
