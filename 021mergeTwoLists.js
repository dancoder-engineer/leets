var mergeTwoLists = function(list1, list2) {
    
    let list = new ListNode();

    do{

        if (list1 !== null && list2 !== null) {
            if (list1.next < list2.next) { 
                list.next = new ListNode(list1.val)
                list1.next
            }
            else { 
                list.next = new ListNode(list2.val)
                list2.next
            }
        }
        else if (list1 === null) { 
            list.next = new ListNode(list1.val)
            list1.next
        }
        else if (list2 === null) { 
            list.next = new ListNode(list2.val)
            list2.next
        }

    } while(isA || isB)

    return list

};


let a = mergeTwoLists(
    [1,2,4], 
    [1,3,4])

console.log(a)






var mergeTwoLists2 = function(list1, list2) {
    
    let returnable = []
    let isA, isB

    do{
        isA = list1.length > 0
        isB = list2.length > 0

        if (isA && isB) {
            if (list1[0] < list2[0]) { returnable.push(list1.shift()) }
            else { returnable.push(list2.shift()) }
        }
        else if (isA && !isB) { returnable.push(list1.shift()) }
        else if (!isA && isB) { returnable.push(list2.shift()) }

    } while(isA || isB)

    return returnable
}