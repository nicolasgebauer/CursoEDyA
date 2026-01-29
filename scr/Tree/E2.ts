/*
 * Implementa un algoritmo que devuelva una lista enlazada con los nodos de cada nivel. Si el árbol tiene
 * N niveles debes devolver N listas enlazadas.
 *
 * Ejemplo:
 *  Input:
 *        4
 *     2     7
 *   1   3  6  9
 *
 *  Output:
 *    4
 *    2->7
 *    1->3->6->9
 */


import { BinarySearchTree, Node } from "./Ejemplo";
import { LinkedList } from 'linked-list-typescript';



export function listOfDepths<T>(root: Node<T> | null): LinkedList<Node<T>>[] {
    const result: LinkedList<Node<T>>[] = [];
    let current = new LinkedList<Node<T>>();
    current.append(root!);

    while(current.length > 0) {
        result.push(current);
        const parents = current;
        current = new LinkedList<Node<T>>();
        for (const parent of parents) {
            if (parent.left) {
                current.append(parent.left);
            }
            if (parent.right) {
                current.append(parent.right);
            }
        }
    }
    return result;
}


// Ejemplo de uso:
const bst = new BinarySearchTree<number>();
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);

const lists = listOfDepths(root);
lists.forEach((list, depth) => {
    const values = list.toArray().map(node => node.value);
    console.log(`Nivel ${depth}: ${values.join(' -> ')}`);
}); 

