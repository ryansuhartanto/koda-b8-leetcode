/**
 * 4. Median of Two Sorted Arrays
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const nums = nums1.concat(nums2).sort((a, b) => a - b);

	// console.log(nums, nums.length);

	if (nums.length === 1) {
		return nums[0];
	}

	const middle = (nums.length - 1) / 2;

	// console.log(middle);

	if (Number.isInteger(middle)) {
		return nums[middle];
	} else {
		const trunc = Math.trunc(middle);
		return (nums[trunc] + nums[trunc + 1]) / 2;
	}
};

// console.log(findMedianSortedArrays([], [1]));
