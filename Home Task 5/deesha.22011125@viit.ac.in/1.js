function prefill(n, v) {
  if (n === 0) {
    return [];
  }
  if (!Number.isInteger(Number(n)) || Number(n) < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  return Array.from({ length: Number(n) }, () => v);
}
prefill(3,1);