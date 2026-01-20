/**
 * Dado un array de números enteros y un target, retorna los índices de dos
 * números para los que la suma de ambos sea igual al target.
 *
 * Puedes asumir que hay solamente una solución.
 *
 * Ejemplo 1:
 *  Input: nums = [9,2,5,6], target = 7
 *  Output: [1,2]
 *  Explicación: nums[1] + nums[2] == 7, devolvemos [1, 2].
 *
 * Ejemplo 2:
 *  Input: nums = [9,2,5,6], target = 100
 *  Output: null
 */

import { promises as fs } from 'fs';
export function twoSum(nums: number[], target: number): [number, number] | null {
    if (nums.length < 2 || nums === null || target === null) return null;
    const complements = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (complements.has(nums[i]!)) {
            return [complements.get(nums[i]!)!, i];
        }
        complements.set(target - nums[i]!, i);
    }
    return null;
}

async function runTests() {
    const data = await fs.readFile('./E2Tests.json', 'utf-8');
    const tests = JSON.parse(data); // Parsea el contenido JSON

    tests.testCases.forEach(({ input, target, expected }: { input: number[]; target: number; expected: [number, number] | null }) => {
        const result = twoSum(input, target);
        const passed = (result === null && expected === null) || (result !== null && expected !== null && result[0] === expected[0] && result[1] === expected[1]);
        console.log(`Input: [${input}], Target: ${target}, Expected: ${expected}, Result: ${result}, Test Passed: ${passed}`);
    });
}
runTests();
