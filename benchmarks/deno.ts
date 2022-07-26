// Testing out of the box
// And its fast...
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import * as math from "./math.ts";

Deno.test("should compute sum correctly", () => {
  assertEquals(math.sum(1, 2), 3);
  assertEquals(math.sum(-1, -2), -3);
  assertEquals(math.sum(-1, 1), 0);
});

Deno.test("should compute div correctly", () => {
  assertEquals(math.div(1, 2), 0.5);
  assertEquals(math.div(-1, -2), 0.5);
  assertEquals(math.div(-1, 1), -1);
});

Deno.test("should compute values correctly", () => {
  assertEquals(math.mod(1, 2), 1);
  assertEquals(math.mod(-3, -2), -1);
  assertEquals(math.mod(7, 4), 3);
});
