import React from "react";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import Dropdown from "./Dropdown";
import CartProd1 from "./CartProd1";
import NewPr from "./newPr";

const Cart = () => {
  return (
    <>
      <div className="m-10">
        <h1 className=" h-40 p-14 text-2xl">Shopping Cart :</h1>
        <CartProd1/>
        <NewPr/>
      </div>
    </>
  );
};

export default Cart;
