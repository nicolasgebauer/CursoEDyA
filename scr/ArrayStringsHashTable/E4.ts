/*
 * Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un
 * 0 en la celda F:C
 *
 * Ejemplo:
 *  Input: 2 1 3 0 2
 *         7 4 1 3 8
 *         4 0 1 2 1
 *         9 3 4 1 9
 *
 *  Output: 0 0 0 0 0
 *          7 0 1 0 8
 *          0 0 0 0 0
 *          9 0 4 0 9
 */

import { promises as fs } from 'fs';
export function ZeroMatrix(matrix: number[][]): number[][] {
    const zeroPositions = new Set<number[]>();
    const numRows = matrix.length;
    const numCols = matrix[0]!.length;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i]![j] === 0) {
                zeroPositions.add([i, j]);
            }
        }
    }
    // Aplicar ceros en filas y columnas detectadas
    for (const pos of zeroPositions) {
        const [f, c] = pos;
        // poner a cero toda la fila f
        for (let j = 0; j < numCols; j++) matrix[f!]![j] = 0;
        // poner a cero toda la columna c
        for (let i = 0; i < numRows; i++) matrix[i]![c!] = 0;
    }
    return matrix;
}

async function runTests() {
    const data = await fs.readFile('./E4Tests.json', 'utf-8');
    const tests = JSON.parse(data);
    
    tests.testCases.forEach(({ input, expected }: { input: number[][]; expected: number[][] }) => {
        const result = ZeroMatrix(JSON.parse(JSON.stringify(input))); // Deep copy para no modificar input
        
        console.log('Input:');
        console.table(input);
        console.log('Expected:');
        console.table(expected);
        console.log('Result:');
        console.table(result);
        console.log('---');
    });
}
runTests();