export function genericComparator(a, b, key) {
  const aVal = (a?.[key] ?? '').toString();
  const bVal = (b?.[key] ?? '').toString();
  return aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: 'base' });
}
