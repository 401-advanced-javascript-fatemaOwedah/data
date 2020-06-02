'use strict';
const LinkedList = require('../linkedList/linkedList');
const mergeLists = (list1, list2) => {
    let mergedList = new LinkedList();
    let l1 = list1;
    let l2 = list2;

    while (l1 || l2) {
        if (l1) {
            mergedList.append(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            mergedList.append(l2.val);
            l2 = l2.next;
        }
    }
    return mergedList.head;
};

const mergeLists1 = (list1, list2) => {

    let l1 = list1;
    let l2 = list2;
    let l3 = null;
    let l3_head = null;

    while (l1 || l2) {
        if (l1) {
            if (!l3_head) {
                l3 = l1;
                l3_head = l1;
            } else {
                l3.next = l1;
                l3 = l3.next;
            }
            l1 = l1.next;
        }

        if (l2) {
            if (!l3_head) {
                l3 = l2;
                l3_head = l2;
            } else {
                l3.next = l2;
                l3 = l3.next;
            }
            l2 = l2.next;
        }
    }
    return l3_head;
};
module.exports = { mergeLists, mergeLists1 };