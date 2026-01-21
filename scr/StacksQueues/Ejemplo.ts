/*
Pilas => LIFO => Last In First Out
    push(item) => agrega un elemento a la pila
    pop() => elimina y devuelve el elemento superior de la pila
    peek() => devuelve el elemento superior sin eliminarlo
    isEmpty() => verifica si la pila está vacía
Colas => FIFO => First In First Out
    add(item) => agrega un elemento al final de la cola
    remove() => elimina y devuelve el elemento al frente de la cola
    peek() => devuelve el elemento al frente sin eliminarlo
    isEmpty() => verifica si la cola está vacía
*/

export class Node {
    value: number;
    next: Node | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export class Stack {
    top: Node | null;

    constructor() {
        this.top = null;
    }

    push(value: number): void {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(): number | null {
        if (this.top === null) return null;
        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    peek(): number | null {
        return this.top ? this.top.value : null;
    }

    isEmpty(): boolean {
        return this.top === null;
    }
}

export class Queue {
    first: Node | null;
    last: Node | null;

    constructor() {
        this.first = null;
        this.last = null;
    }
    
    add(value: number): void {
        const newNode = new Node(value);
        if (this.last) {
            this.last.next = newNode;
        }
        this.last = newNode;
        if (!this.first) {
            this.first = newNode;
        }
    }

    remove(): number | null {
        if (!this.first) return null;
        const removedValue = this.first.value;
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }
        return removedValue;
    }

    peek(): number | null {
        return this.first ? this.first.value : null;
    }

    isEmpty(): boolean {
        return this.first === null;
    }
}