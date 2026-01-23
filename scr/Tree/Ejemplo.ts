/*

    Binary Tree: Es un grafo donde un nodo puede tener como máximo dos hijos.
    Binary Search Tree: Es un árbol binario que cumple con la propiedad de búsqueda binaria, hijo izquierdo < nodo < hijo derecho.

    Recorersión en árboles:
    - Preorden (Root, Left, Right)
    - Inorden (Left, Root, Right) (busca de menor a mayor)
    - Postorden (Left, Right, Root)

    Buenos para ordenar, obtener y insertar datos jerárquicos, como sistemas de archivos o estructuras organizativas.

*/

export class Node<T> {
    value: T
    left: Node<T> | null = null
    right: Node<T> | null = null

    constructor(value: T) {
        this.value = value
        this.left = null
        this.right = null
    }
}


export class BinarySearchTree<T> {

    inoOrderTraversal(node: Node<T>) : void {
        if (node !== null) {
            this.inoOrderTraversal(node.left!)
            console.log(node.value)
            this.inoOrderTraversal(node.right!)
        }
    }
    preOrderTraversal(node: Node<T>) : void {
        if (node !== null) {
            console.log(node.value)
            this.preOrderTraversal(node.left!)
            this.preOrderTraversal(node.right!)
        }
    }

    postOrderTraversal(node: Node<T>) : void {
        if (node !== null) {
            this.postOrderTraversal(node.left!)
            this.postOrderTraversal(node.right!)
            console.log(node.value)
        }
    }
}
