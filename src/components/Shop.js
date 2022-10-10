import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { addToLocalStore } from "../utils/Functions";
import { CartContext, PriductContext } from "./Main";
import ProductCart from "./ProductCart";

const Shop = () => {
  const priduct = useContext(PriductContext);
  const [cart, setCart] = useContext(CartContext);

  // const [cart, setCart] = useState([]);
  const HandalAddToCard = (products) => {
    let newProduct = [];
    const exjest = cart.find((product) => product.id === products.id);
    if (!exjest) {
      products.quantity = 1;
      newProduct = [...cart, products];
    } else {
      const rest = cart.filter((product) => product.id !== products.id);
      exjest.quantity = exjest.quantity + 1;
      newProduct = [...rest, exjest];
    }
    setCart(newProduct);
    addToLocalStore(products.id);
    toast.success("add this product !!", { autoClose: 500 });
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <dir className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {priduct.map((product) => (
          <ProductCart
            key={product.id}
            HandalAddToCard={HandalAddToCard}
            product={product}
          ></ProductCart>
        ))}
      </dir>
    </div>
  );
};

export default Shop;

// let selecterCart = [];
// const exjist = cart.find((product) => product.id === products.id);
// if (!exjist) {
//   products.quantity = 1;
//   selecterCart = [...cart, products];
// } else {
//   const rest = cart.filter((product) => product.id !== products.id);
//   exjist.quantity = exjist.quantity + 1;
//   selecterCart = [...rest, exjist];
// }
