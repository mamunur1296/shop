import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

export const PriductContext = createContext([]);
export const CartContext = createContext([]);

const Main = () => {
  const { allData, cardStoreData } = useLoaderData();
  const [cart, setCart] = useState(cardStoreData);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <PriductContext.Provider value={allData}>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </PriductContext.Provider>
    </CartContext.Provider>
  );
};

export default Main;
