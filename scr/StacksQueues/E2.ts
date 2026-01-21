/*
 * Dado un String que solamente contiene los caracteres '(', ')', '{', '}', '[' y ']',
 * implementa un algoritmo para determinar si es válido.
 *
 * Ejemplo 1:
 *  Input: "([]){}"
 *  Output: true
 *
 * Ejemplo 2:
 *  Input: "({)}"
 *  Output: false
 */

import { Node, Stack } from './Ejemplo';

export function isValid(s: string): boolean {
    if (s === null || s.length % 2 !== 0 || s.length < 2) return false;
    const stack = new Stack<string>();
    const openinBracket = new Set(['(', '{', '[']);
    const matchingBrackets: { [key: string]: string } = {')': '(', '}': '{', ']': '['};
    
    for (const char of s) {
        if (openinBracket.has(char)) {
            // Es un bracket de apertura: guardarlo en el stack
            stack.push(char);
        } else{ 
            // Es un bracket de cierre: verificar que coincida con el del stack
            if (stack.isEmpty() || stack.pop() !== matchingBrackets[char]) return false;
        }
    }
    return stack.isEmpty();
}

async function runTests() {
    const testStrings = ["([]){}", "({)}", "((()))", "[{()}]", "[(])", ""];
    for (const str of testStrings) {
        const result = isValid(str);
        console.log(`Input: "${str}", Is Valid: ${result}`);    
    }
}
runTests();

