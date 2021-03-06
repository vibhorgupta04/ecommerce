import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log("fetch");


    setProducts(data);
  };

  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve();

    setCart(await commerce.cart.retrieve());

  };

  const handleAddedToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    console.log("added");

    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    console.log("update");
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    console.log("remove");

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    console.log("empty");

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddedToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;