import { describe, expect, it } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
	it("adds a list", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([])).toBe(0);
	});
});
