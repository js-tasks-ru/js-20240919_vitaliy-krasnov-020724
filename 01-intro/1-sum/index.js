/**
 * Sum of two numbers
 *
 * @param {number} m first number
 * @param {number} n second number
 * @returns {number}
 */
export const sum = (m, n) => {
  if (isNaN(m) || isNaN(n)) {
    throw Error("Аргументы функции должны быть числами!");
  }
  return m + n;
};
