export function formatDiscountPct(value: number): number | string {
  return value % 1 === 0 ? Number(value).toFixed(0) : value.toString();
}
