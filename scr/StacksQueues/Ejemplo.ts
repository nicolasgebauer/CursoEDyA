/*
Pilas => LIFO => Last In First Out
    push(item) => agrega un elemento a la pila
    pop() => elimina y devuelve el elemento superior de la pila
    peek() => devuelve el elemento superior sin eliminarlo
    isEmpty() => verifica si la pila está vacía
    size() => devuelve el tamaño de la pila
Colas => FIFO => First In First Out
    add(item) => agrega un elemento al final de la cola
    remove() => elimina y devuelve el elemento al frente de la cola
    peek() => devuelve el elemento al frente sin eliminarlo
    isEmpty() => verifica si la cola está vacía
    size() => devuelve el tamaño de la cola
*/

export class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class Stack<T> {
    top: Node<T> | null;

    constructor() {
        this.top = null;
    }

    push(value: T): void {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(): T | null {
        if (this.top === null) return null;
        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    peek(): T | null {
        return this.top ? this.top.value : null;
    }

    isEmpty(): boolean {
        return this.top === null;
    }

    size(): number {
        let count = 0;
        let current = this.top;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

export class Queue<T> {
    first: Node<T> | null;
    last: Node<T> | null;

    constructor() {
        this.first = null;
        this.last = null;
    }
    
    add(value: T): void {
        const newNode = new Node(value);
        if (this.last) {
            this.last.next = newNode;
        }
        this.last = newNode;
        if (!this.first) {
            this.first = newNode;
        }
    }

    remove(): T | null {
        if (!this.first) return null;
        const removedValue = this.first.value;
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }
        return removedValue;
    }

    peek(): T | null {
        return this.first ? this.first.value : null;
    }

    isEmpty(): boolean {
        return this.first === null;
    }

    size(): number {
        let count = 0;
        let current = this.first;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}