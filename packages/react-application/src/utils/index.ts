/**
 *
 * @param amount number | string The amount/count passed as a full number.
 * @returns string Normalized to show amounts in K or M.
 */
export const normalizeAmount = (amount: number | string): string => {
  const parsedInt = parseInt(amount.toString());

  if (parsedInt.toString().length > 6) {
    const res = parsedInt / 1000000;
    return `${res.toFixed(1)}M`;
  } else {
    const res = parsedInt / 1000;
    return `${res.toFixed(1)}K`;
  }
};
