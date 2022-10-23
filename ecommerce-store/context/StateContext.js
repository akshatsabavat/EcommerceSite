import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    let x = qty + 1;
    setQty(x);
  };

  const decQty = () => {
    let y;
    qty - 1 < 1 ? (y = 1) : (y = qty - 1);
    setQty(y);
  };

  const openCart = () => {
    let state = true;
    setshowCart(state);
  };

  const closeCart = () => {
    let state = false;
    setshowCart(state);
  };

  const onAdd = (product, quantity) => {
    const cartCheck = cartItems.find((item) => item._id === product._id);
    let price = product.price * quantity + totalPrice;
    let quant = totalQuantities + quantity;

    setTotalPrice(price);
    setTotalQuantities(quant);
    if (cartCheck) {
      const updatedCartItem = cartItems.map((item) => {
        if (item._id === product._id)
          return {
            ...item,
            quantity: item.quantity + 1,
          };
      });
      setCartItems(updatedCartItem);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    console.log(cartItems);
    toast.success(`${qty} ${product.name} added to cart`);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        openCart,
        closeCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
