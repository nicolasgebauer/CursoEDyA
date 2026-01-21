/*
 * Escribe un algoritmo que realice la suma de dos listas que representan
 * dos enteros positivos. Las listas están en posición invertida.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 5->2->8
 *  Output: 6->4->2->7
 *  6421 + 825 = 7246
 */

import { LinkedList, Node } from './Ejemplo';

export function addTwoNumbers(l1: Node | null, l2: Node | null): LinkedList | null {
    const resultList = new LinkedList();
    //carry es el valor que indicara si hay que sumar 1 al siguiente digito,
    // o si la suma del puntero 1 y puntero 2 es mayor a 10
    let carry = 0;
    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 !== null ? l1.value : 0;
        const val2 = l2 !== null ? l2.value : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        resultList.append(sum % 10);
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return resultList;
}

async function runTests() {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(4);
    list1.append(6);
    const list2 = new LinkedList();
    list2.append(5);
    list2.append(2);
    list2.append(8);
    console.log("Lista 1:");
    list1.print();
    console.log("Lista 2:");
    list2.print();
    const resultList = addTwoNumbers(list1.head, list2.head);
    console.log("Lista resultado (suma):");
    if (resultList !== null) {
        resultList.print();
    } else {
        console.log("Resultado es nulo");
    }
}
runTests();

