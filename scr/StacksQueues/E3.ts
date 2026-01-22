/*
 * Ordena un Stack de forma que los elementos más pequeños queden en el tope del Stack.
 * Puedes usar un Stack adicional, pero no está permitido copiar los elementos a otra
 * estructura de datos.
 *
 * Ejemplo:
 *  Input: (tope) 5->1->4->2
 *  Output: (tope) 1->2->4->5
 */

import { Node, Stack } from './Ejemplo';
export function sortStack(inputStack: Stack<number>): Stack<number> {
    const tempStack = new Stack<number>();
    tempStack.push(inputStack.pop()!);
    while (!inputStack.isEmpty()) {
        const top = inputStack.pop()!;
        while (!tempStack.isEmpty() && tempStack.peek()! > top) {
            inputStack.push(tempStack.pop()!);
        }
        tempStack.push(top);
    }
    return tempStack;
}

async function runTests() {
    const stack = new Stack<number>();
    stack.push(5);
    stack.push(1);
    stack.push(4);
    stack.push(2);
    console.log("Stack original (tope a base):");
    stack.print();
    const sortedStack = sortStack(stack);
    console.log("Stack ordenado (tope a base):");
    sortedStack.print();
    
}
runTests();