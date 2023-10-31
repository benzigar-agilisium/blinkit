import items from "../../data/items.json";

export const getSearchResults = (searchText) => {
  let products = [];
  items?.forEach((each) => {
    each?.items?.forEach((items) => {
      items?.products?.forEach((product) => {
        if (product.productName?.toLowerCase().includes(searchText.toLowerCase())) products.push(product);
      });
    });
  });

  return products;
};
