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

  const toggleCartItemQty = (id, value) => {
    const foundProd = cartItems.find((product) => product._id === id);
    const index = cartItems.findIndex((product) => product._id === id);
    const createNewList = cartItems.filter((item) => item._id !== id); //removes older entries of products in the arrayW

    if (value === "inc") {
      setCartItems([
        ...createNewList,
        { ...foundProd, quantity: foundProd.quantity + 1 },
      ]);
      setTotalPrice((totalPrice = totalPrice + foundProd.price));
      setTotalQuantities((totalQuantities = totalQuantities + 1));
    } else if (value === "dec") {
      if (foundProd.quantity > 1) {
        setCartItems([
          ...createNewList,
          { ...foundProd, quantity: foundProd.quantity - 1 },
        ]);
        setTotalPrice((totalPrice = totalPrice - foundProd.price));
        setTotalQuantities((totalQuantities = totalQuantities - 1));
      }
    }
  };

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
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
        toggleCartItemQty,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
