import { describe, expect, it } from "vitest";
import { max, mean, min, sum } from "../src/sum.js";

describe("sum", () => {
	it("adds a list", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([])).toBe(0);
	});
});

describe("max", () => {
	it("finds the largest, or nothing in an empty list", () => {
		expect(max([1, 3, 2])).toBe(3);
		expect(max([])).toBeUndefined();
	});
});

describe("min", () => {
	it("finds the smallest, or nothing in an empty list", () => {
		expect(min([3, 1, 2])).toBe(1);
		expect(min([])).toBeUndefined();
	});
});

describe("mean", () => {
	it("averages a list, or gives nothing for an empty one", () => {
		expect(mean([1, 2, 3])).toBe(2);
		expect(mean([])).toBeUndefined();
	});
});
