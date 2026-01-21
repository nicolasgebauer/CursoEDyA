/*
 * Escribe un algoritmo para eliminar los elementos duplicados en una Lista enlazada
 *
 * Ejemplo:
 *  Input: 1->2->2->3->4->1
 *  Output: 1->2->3->4
 *
 *
 *
 * Follow-up: ¿Cuál sería tu solución si no pudieras utilizar memoria adicional?
 */
import { LinkedList, Node } from './Ejemplo';

export function removeDuplicates(head: Node ): void {
    const numbersInList = new Set<number>();
    let current: Node | null = head;
    if (current === null) return;
    numbersInList.add(current.value);
    while (current.next !== null) {
        if (numbersInList.has(current.next.value)) {
            current.next = current.next.next;
        } else {
            numbersInList.add(current.next.value);
            current = current.next;
        }
    }
}

async function runTests() {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(1);
    console.log("Lista original con duplicados:");
    list.print(); // Output: 1 , 2 , 2 , 3 , 4 , 1
    if (list.head !== null) {
        removeDuplicates(list.head);
        console.log("Lista después de eliminar duplicados:");
        list.print(); // Output: 1 , 2 , 3 , 4
    }
}
runTests();