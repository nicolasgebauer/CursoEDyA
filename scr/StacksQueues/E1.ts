/*
 * Implementa una clase MyQueue utilizando dos stacks.
 * OJO: En este repositorio estamos utilizando TypeScript, pero igualemente dejo la información de Java.
 * 
 * 
 * Como Stack usaremos la Interfaz Deque, que proporciona las operaciones de una cola doblemente terminada,
 * permitiéndola usar como Pila o Cola (solo las operaciones de Pila están permitidas en este ejercicio).
 *
 * Java también tiene la clase Stack, pero su uso no está recomendado por extender de la clase Vector, que
 * no tiene demasiado sentido, y por ser una clase específica y no una interfaz. Si quieres saber más sobre
 * este tema puedes acceder al siguiente enlace:
 * https://stackoverflow.com/questions/12524826/why-should-i-use-deque-over-stack

 */

import { Node, Stack, Queue } from './Ejemplo';

export class QueueUsingStacks {
    fisrtStack: Stack;
    secondStack: Stack;

    constructor() {
        this.fisrtStack = new Stack();
        this.secondStack = new Stack();
    }

    add(value: number): void {
        this.fisrtStack.push(value);
    }

    private dumpElementsInSecondStack(): void {
        if (this.secondStack.isEmpty()) {
            while (!this.fisrtStack.isEmpty()) {
                this.secondStack.push(this.fisrtStack.pop()!);
            }
        }
    }

    peek(): number | null {
        this.dumpElementsInSecondStack();
        return this.secondStack.peek();
    }

    remove(): number | null {
        this.dumpElementsInSecondStack();
        return this.secondStack.pop();
    }   

    isEmpty(): boolean {
        return this.fisrtStack.isEmpty() && this.secondStack.isEmpty();
    }

    size(): number {
        return this.fisrtStack.size() + this.secondStack.size();
    }
}




