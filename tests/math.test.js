import test from "node:test";
import assert from "node:assert/strict";
import { add, isEven } from "../src/math.js";

test("add adds numbers", () => {
  assert.equal(add(2, 3), 6);
});

test("isEven detects even numbers", () => {
  assert.equal(isEven(10), true);
  assert.equal(isEven(7), false);
});
