/*
 * Dada la raíz de un árbol binario, devuelve el árbol binario invertido.
 *
 * Ejemplo:
 *  Input:
 *        4
 *     2     7
 *   1   3  6  9
 *
 *  *  Output:
 *        4
 *     7     2
 *   9   6  3  1
 */

import { BinarySearchTree, Node } from "./Ejemplo";

export function invertBinaryTree<T>(root: Node<T> | null): Node<T> | null {
    if (root == null) return null;
    const temp = root!.left;
    root!.left = invertBinaryTree(root?.right);
    root!.right = invertBinaryTree(temp);
    return root;
}

// Ejemplo de uso:
const bst = new BinarySearchTree<number>();
let root: Node<number> | null = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);
console.log("Árbol original (in-order traversal):");
bst.inoOrderTraversal(root);
root = invertBinaryTree(root);
console.log("Árbol invertido (in-order traversal):");
bst.inoOrderTraversal(root!);

