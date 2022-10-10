export const gatToLocalstore = (key) => {
  let gatStoreData = {};
  const getdata = JSON.parse(localStorage.getItem(key));
  if (getdata) {
    gatStoreData = getdata;
  }
  return gatStoreData;
};
export const addToLocalStore = (id) => {
  const getItem = gatToLocalstore("product-data");
  const quentity = getItem[id];
  if (quentity) {
    getItem[id] = quentity + 1;
  } else {
    getItem[id] = 1;
  }
  localStorage.setItem("product-data", JSON.stringify(getItem));
  return getItem;
};
export const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("product-data");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("product-data", JSON.stringify(shoppingCart));
    }
  }
};
export const deleteShoppingCart = () => {
  localStorage.removeItem("product-data");
};
