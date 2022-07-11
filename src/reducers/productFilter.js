export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const FILTER_BY_STOCK = "FILTER_BY_STOCK";
export const FILTER_BY_DELIVERY = "FILTER_BY_DELIVERY";
export const FILTER_BY_RATING = "FILTER_BY_RATING";
export const FILTER_BY_SEARCH = "FILTER_BY_SEARCH";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const productFilter = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { state };
    case "FILTER_BY_STOCK":
      return { state };
    case "FILTER_BY_DELIVERY":
      return { state };
    case "FILTER_BY_RATING":
      return { state };
    case "FILTER_BY_SEARCH":
      return { state };
    case "CLEAR_FILTERS":
      return { state };
    default:
      return state;
  }
};
