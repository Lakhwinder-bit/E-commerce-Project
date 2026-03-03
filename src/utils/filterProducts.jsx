export const getAvailableSizes = (item) => {
  if (Array.isArray(item.size)) {
    return item.size
      .filter((s) => s.available)
      .map((s) => s.name);
  }
  return [];
};

export const filterProducts = ({
  products,
  gender,
  minPrice,
  selectedSizes,
}) => {
  return products
    .filter((item) => {
      if (gender && item.genderCatagory !== gender) return false;
      return true;
    })
    .filter((item) => {
      if (minPrice !== "" && item.price < Number(minPrice)) return false;
      return true;
    })
    .filter((item) => {
      if (selectedSizes.length > 0) {
        const productSizes = getAvailableSizes(item);
        const hasMatch = selectedSizes.some((sz) =>
          productSizes.includes(sz)
        );
        if (!hasMatch) return false;
      }
      return true;
    });
};