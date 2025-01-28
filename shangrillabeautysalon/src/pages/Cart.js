import React, { useState } from "react";
import "../styles/global.css"; // Import global styles


const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Hair Cut", price: 50, quantity: 1 },
    { id: 2, name: "Facial", price: 100, quantity: 1 },
    { id: 3, name: "Manicure", price: 80, quantity: 1 },
  ]);

  // Function to handle quantity changes
  const updateQuantity = (id, action) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        if (action === "increase") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Function to calculate total price
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to remove an item
  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-price">${item.price} per item</p>
                </div>
                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
                <p className="item-total">
                  ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2 className="total-price">
              Total: ${calculateTotal().toFixed(2)}
            </h2>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
