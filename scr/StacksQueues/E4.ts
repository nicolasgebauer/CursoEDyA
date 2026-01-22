/*
 * ¿Cómo diseñarías un Stack que además de las operaciones de push y pop también
 * contase con una operación para obtener el mínimo?
 */

import { Node } from './Ejemplo';

export class StackWithMin<T> {
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

    min(): T | null {
        let min = this.top;
        let current = this.top;
        while (current !== null) {
            if (min === null || current.value < min.value) {
                min = current;
            }
            current = current.next;
        }
        return min ? min.value : null;
    }
}


async function runTests() {
    const stack = new StackWithMin<number>();
    stack.push(4);
    stack.push(1);
    stack.push(5);
    stack.push(3);
    stack.push(7);
    console.log("Current Min:", stack.min());
    stack.pop();
    console.log("Current Min after pop:", stack.min());
    stack.push(2);
    stack.push(0);
    console.log("Current Min after pushing 2:", stack.min());
}
runTests();