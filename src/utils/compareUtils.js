export const highlightDiffs = (products) => {
  if (products.length < 2) return {};
  const keys = Object.keys(products[0].features);
  const diffs = {};
  keys.forEach(key => {
    const values = products.map(p => p.features[key]);
    diffs[key] = new Set(values).size > 1;
  });
  return diffs;
}
