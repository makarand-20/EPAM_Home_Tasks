function prefill(n, value) {
  if (!Number.isInteger(Number(n)) || Number(n) < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  return Array.from({ length: Number(n) }, () => value);
}
