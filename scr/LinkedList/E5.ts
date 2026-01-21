/*
 * Escribe un algoritmo que intercambie parejas de nodos adyacentes sin
 * modificar el valor interno de los nodos.
 *
 * Ejemplo:
 *  Input: 1->2->4->6->8
 *  Output: 2->1->6->4->8
 */

import { LinkedList, Node } from './Ejemplo';

export function swapPairs(head: Node | null): Node | null {
    //Caso base: Si la lista está vacía o tiene un solo nodo, no hay nada que intercambiar
    if (head === null || head.next === null) return head;
    //Identificamos los dos primeros nodos a intercambiar
    const firstNode = head;
    const secondNode = head.next;
    //Intercambiamos los nodos
    firstNode.next = swapPairs(secondNode.next);
    secondNode.next = firstNode;
    return secondNode;
}

async function runTests() {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(4);
    list.append(6);
    list.append(8);
    console.log("Lista original:");
    list.print();
    list.head = swapPairs(list.head);
    console.log("Lista después de intercambiar parejas:");
    list.print();
}
runTests();
