/*
 * Dado un método que recibe un string, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde")  => true;
 * isUnique("abcded") => false;
 */

import { promises as fs } from 'fs';
export function isUnique(str: string): boolean {
    const charSet = new Set<string>(); //Set es lo mismo que una tabla Hash
    
    for (const char of str) {
        if (charSet.has(char)) {
            return false; // Encontramos un carácter duplicado
        }
        charSet.add(char);
    }
    
    return true; // Todos los caracteres son únicos
}

async function runTests() {
    const data = await fs.readFile('./E1Tests.json', 'utf-8'); // Lee el archivo JSON
    const tests = JSON.parse(data); // Parsea el contenido JSON

    tests.testCases.forEach(({ input, expected }: { input: string; expected: boolean }) => {
        const result = isUnique(input);
        console.log(`Input: "${input}", Expected: ${expected}, Result: ${result}, Test Passed: ${result === expected}`);
    });
}

runTests();
