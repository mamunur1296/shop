import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteShoppingCart, removeFromDb } from "../utils/Functions";
import Chackout from "./Chackout";
import { CartContext } from "./Main";

const Card = () => {
  const [cart, setCart] = useContext(CartContext);

  const handalDeleitBtn = (id) => {
    const deletCard = cart.filter((cd) => cd.id !== id);
    setCart(deletCard);
    removeFromDb(id);
    toast.warning("deleit for card", { autoClose: 500 });
  };
  let total = 0;
  for (const prod of cart) {
    total = total + prod.price * prod.quantity;
  }

  const handalOrderPlace = () => {
    if (cart.length) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("order complited", { autoClose: 500 });
    }
    return toast.error("order complited", { autoClose: 500 });
  };
  return (
    <div className="flex  flex-col max-w-xl h-5/6 p-6 space-y-4 sm:p-10 mx-auto dark:text-gray-900 dark:bg-gray-100">
      <h2 className="text-xl font-semibold">Receaw Cart Item</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cart.map((product) => (
          <Chackout
            key={product.id}
            product={product}
            handalDeleitBtn={handalDeleitBtn}
          ></Chackout>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">{total} €</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to={"/shop"}>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
        </Link>
        <button
          onClick={handalOrderPlace}
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Card;
