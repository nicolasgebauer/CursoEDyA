/*
 * Dada una lista enlazada simple y un valor N, devuelve el nodo N empezando por el final
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2
 *  Output: 4
 */

import { LinkedList, Node } from './Ejemplo';

export function getNthFromEnd(head: Node | null, n: number): Node | null {
    //Validamos que la linked list no sea nula y que n sea mayor a 0
    if (head === null || n <= 0) return null;
    //Inizializamos puntero para encontrar la posicion n desde el final
    let secondPointer: Node | null = head;

    //Movemos el puntero n posiciones hacia adelante
    for (let i = 0; i < n; i++) {
        if (head === null) return null; //Si n es mayor al tamaño de la lista
        head = head.next;
    }

    //Movemos ambos punteros hasta que el primero llegue al final
    while (head !== null) {
        head = head.next;
        secondPointer = secondPointer!.next;
    }
    //El segundo puntero ahora apunta al nodo n desde el final
    if (secondPointer !== null) return secondPointer;
    return null;
}

async function runTests() {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(4);
    list.append(6);
    const n = 2;
    console.log("Lista:");
    list.print();
    const resultNode = getNthFromEnd(list.head, n);
    if (resultNode !== null) {
        console.log(`El nodo ${n} desde el final tiene el valor: ${resultNode.value}`);
    } else console.log(`El nodo ${n} desde el final no existe.`);
}
runTests();