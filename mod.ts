import { equal } from "https://deno.land/std@0.192.0/testing/asserts.ts";
/**
 * @function uniqueArray
 * @description Return unique array elements without any duplicated elements by ignore their reference points.
 * @template {unknown} T
 * @param {T[]} item Array that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 */
function uniqueArray<T>(item: T[]): T[] {
	if (!Array.isArray(item)) {
		throw new TypeError(`Argument \`item\` must be type of array!`);
	}
	let resultFinal: T[] = [];
	for (let itemElement of new Set<T>(item).values()) {
		if (
			resultFinal.length === 0 ||
			!resultFinal.some((resultElement: T): boolean => {
				return equal(itemElement, resultElement);
			})
		) {
			resultFinal.push(itemElement);
		}
	}
	return resultFinal;
}
export default uniqueArray;