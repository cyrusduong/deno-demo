// Audited std library and better built in functions
// https://deno.land/std@0.149.0/examples

/**
 * LeetCode 34. Find First and Last Position of Element in Sorted Array
 *
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 */
export const search = (n: number[], target: number) => {
  const firstIndex = n.findIndex((val) => val === target);
  const lastIndex = n.findLastIndex((val) => val === target);
  return [firstIndex ?? -1, lastIndex ?? -1];
};

Deno.test("should find the thing", () => {
  const n = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 0];
  // Hrm what is the module to assert again???
  assertEquals(search(n, 5), [4, 8]);
});

/**
 * Dotenv in std
 */
import { config } from "https://deno.land/std/dotenv/mod.ts";
console.log("dotenv");
console.log(await config());
