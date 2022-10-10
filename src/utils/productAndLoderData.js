import { gatToLocalstore } from "./Functions";

export const productAndLoderData = async () => {
  const loderData = await fetch("productsss.json");
  const allData = await loderData.json();

  const storeData = gatToLocalstore("product-data");
  let cardStoreData = [];
  for (const id in storeData) {
    const addData = allData.find((data) => data.id === id);
    if (addData) {
      addData.quantity = storeData[id];
      cardStoreData.push(addData);
    }
  }
  console.log(allData);
  return { allData, cardStoreData };
};
