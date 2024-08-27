import React from "react";
import "../elements/cart.css";
import { useSelector } from "react-redux";
import {removeItem} from "../../redux/slices/cartSlice"
import { useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state?.cart || []);
  const dispatch = useDispatch()
  
  // Ensure prices are numbers and calculate the total
  const total = items.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <>
      <main id="main_cart">
        <section id="cart-section">
          <div className="container" id="cart-container">
            <h1 id="cart-title">Your Cart</h1>
            <table id="cart-table">
              <thead>
                <tr className="table-row">\
                
                  <th className="table-header">Item</th>
                  {/* <th className="table-header"><pre>       </pre></th> */}
                  <th className="table-header">Price</th>
                  <th className="table-header">Remove</th>
                </tr>
              </thead>
              <tbody id="cart-items">
                {items.map((e, index) => (
                  <tr key={index}>
                    <td>{e.id}</td>
                    <td className="itemsName">{e.name.substring(0 , 13)}</td>
                    {/* <td><pre>      </pre></td> */}
                    <td>{e.price}</td>
                    <td><button className="remove-btn" onClick={(e)=>dispatch(removeItem(index))}><i class="fa-solid fa-xmark"></i></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div id="cart-summary">
              <p id="total-label">Total:</p>
              <p id="total-amount">Rs. {total}</p>
            </div>
            <button id="checkout-button">Proceed to Checkout</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
