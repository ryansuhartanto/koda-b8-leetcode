/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @typedef ListNode
 * @prop {number} [val]
 * @prop {ListNode} [next]
 */
/**
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const l3 = new ListNode();

	let l1n = l1;
	let l2n = l2;
	let l3n = l3;
	let extra = 0;

	while (true) {
		let calc = (l1n?.val ?? 0) + (l2n?.val ?? 0) + extra;
		// console.log("ori", calc);

		if (calc >= 10) {
			extra = Math.trunc(calc / 10);
			calc = calc % 10;
		} else {
			extra = 0;
		}

		// console.log("ext", calc);
		l3n.val = calc;

		l1n = l1n?.next;
		l2n = l2n?.next;

		if (!l1n && !l2n && !extra) {
			break;
		}

		l3n.next = new ListNode();
		l3n = l3n.next;
	}

	return l3;
};
