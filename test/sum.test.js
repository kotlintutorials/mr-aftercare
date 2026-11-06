import { describe, expect, it } from "vitest";
import { max, sum } from "../src/sum.js";

describe("sum", () => {
	it("adds a list", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([])).toBe(0);
	});
});

describe("max", () => {
	it("finds the largest", () => {
		expect(max([1, 3, 2])).toBe(3);
		expect(max([])).toBeUndefined();
	});
});
