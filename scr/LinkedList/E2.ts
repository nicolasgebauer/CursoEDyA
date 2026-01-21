/*
 * Escribe un algoritmo para combinar dos listas enlazadas simples ordenadas.
 * El resultado debe ser una única lista enlazada ordenada. Devuelve su head.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2->3->5
 *  Output: 1->2->2->3->4->5->6
 */

import { LinkedList, Node } from './Ejemplo';

export function mergeTwoLists(l1: Node | null, l2: Node | null): Node | null {
    if (l1 === null || l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.value <= l2.value) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

async function runTests() {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(4);
    list1.append(6);
    const list2 = new LinkedList();
    list2.append(2);
    list2.append(3);
    list2.append(5);
    console.log("Lista 1:");
    list1.print();
    console.log("Lista 2:");
    list2.print();
}
runTests();