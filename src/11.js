/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
/**
 * 21. Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists `list1` and `list2`.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * @param {ListNode} [list1]
 * @param {ListNode} [list2]
 * @return {ListNode | void}
 */
var mergeTwoLists = function (list1, list2) {
	if (list1?.val === undefined) {
		return list2;
	} else if (list2?.val === undefined) {
		return list1;
	}

	let curr = list1;
	let grab = list2;

	if (list2.val < list1.val) {
		curr = list2;
		grab = list1;
	}

	const root = curr;

	while (curr.next ?? grab) {
		if (!curr.next) {
			curr.next = grab;
			break;
		}

		if ((curr.next.val ?? 0) < (grab.val ?? 0)) {
			curr = curr.next;
		} else {
			const temp = grab;
			grab = curr.next;
			curr.next = temp;
			curr = curr.next;
		}
	}

	return root;
};
