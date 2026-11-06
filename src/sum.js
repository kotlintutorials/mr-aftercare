/** The sum of a list of numbers. */
export const sum = (xs) => xs.reduce((a, b) => a + b, 0);

/** The largest of a list of numbers; undefined for an empty list. */
export const max = (xs) => (xs.length ? Math.max(...xs) : undefined);

/** The smallest of a list of numbers; undefined for an empty list. */
export const min = (xs) => (xs.length ? Math.min(...xs) : undefined);

/** The mean of a list of numbers; undefined for an empty list. */
export const mean = (xs) => (xs.length ? sum(xs) / xs.length : undefined);
