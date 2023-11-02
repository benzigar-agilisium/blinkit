import items from "../../data/items.json";
import _ from "lodash";

export const getSearchResults = (searchText) => {
  let products = [];
  _.forEach(items, (each) => {
    _.forEach(each?.items, (items) => {
      _.forEach(items?.products, (product) => {
        if (product.productName?.toLowerCase().includes(searchText?.toLowerCase())) products.push(product);
      });
    });
  });

  return products;
};
