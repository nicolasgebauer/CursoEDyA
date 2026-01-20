/*
 * Un anagrama es una palabra creada a partir de la reordenación de las letras de otra palabra. Ej: saco - caso
 * Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es válido.
 *
 * Ejemplo:
 *  Input: words = ["saco", "arresto", "programa", "rastreo", "caso"].
 *  Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]].
 */

import { promises as fs } from 'fs';
export function groupAnagrams(words: string[]): string[][] {
    // Crea un Map para almacenar los anagramas agrupados por su forma ordenada
    const anagramMap = new Map<string, string[]>();
    
    // Itera sobre cada palabra del array de entrada
    for (const word of words) {
        // Divide la palabra en caracteres, los ordena alfabéticamente y los une nuevamente
        const sortedWord = word.split('').sort().join('');
        
        // Si la palabra ordenada no existe en el Map, crea una nueva entrada con un array vacío
        if (!anagramMap.has(sortedWord)) {
            anagramMap.set(sortedWord, []);
        }
        
        // Añade la palabra original al array correspondiente a su forma ordenada
        anagramMap.get(sortedWord)!.push(word);
    }
    
    // Convierte los valores del Map en un array bidimensional y lo devuelve
    return Array.from(anagramMap.values());
}
async function runTests() {
    const data = await fs.readFile('./E3Tests.json', 'utf-8');
    const tests = JSON.parse(data); // Parsea el contenido JSON
    
    tests.testCases.forEach(({ input, expected }: { input: string[]; expected: string[][] }) => {
        const result = groupAnagrams(input);
        console.log(`Input: [${input}], Expected: [${JSON.stringify(expected)}], Result: [${JSON.stringify(result)}]`);
    });
}
runTests();