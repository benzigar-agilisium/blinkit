import CONSTANTS from "../homeProductList.constants";

export const getSortedItems = (categoryItems, sortOrder) => {
  if (sortOrder === CONSTANTS.NONE) return categoryItems?.sort((a, b) => a.order - b.order);
  if (sortOrder === CONSTANTS.PRICE_ASC) return categoryItems?.sort((a, b) => a.sellingPrice - b.sellingPrice);
  if (sortOrder === CONSTANTS.PRICE_DESC) return categoryItems?.sort((a, b) => b.sellingPrice - a.sellingPrice);
  else return [];
};
