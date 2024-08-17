import React from "react";
import "../elements/cart.css";
const Cart = () => {
  return (
    <>
      <main id="main_cart">
        <section id="cart-section">
          <div class="container" id="cart-container">
            <h1 id="cart-title">Your Cart</h1>
            <table id="cart-table">
              <thead>
                <tr className="table-row">
                  <th class="table-header">Item</th>
                  <th class="table-header">Quantity</th>
                  <th class="table-header">Price</th>
                  <th class="table-header">Total</th>
                  <th class="table-header">Remove</th>
                </tr>
              </thead>
              <tbody id="cart-items">
                <tr>
                  <td>Pizza</td>
                  <td>4</td>
                  <td>300</td>
                  <td>1200</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div id="cart-summary">
              <p id="total-label">Total:</p>
              <p id="total-amount">Rs. 1200.00</p>
            </div>
            <button id="checkout-button">Proceed to Checkout</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
