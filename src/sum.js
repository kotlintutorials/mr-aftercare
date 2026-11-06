/** The sum of a list of numbers. */
export const sum = (xs) => xs.reduce((a, b) => a + b, 0);

/** The largest of a list of numbers; undefined for an empty list. */
export const max = (xs) => (xs.length ? Math.max(...xs) : undefined);
