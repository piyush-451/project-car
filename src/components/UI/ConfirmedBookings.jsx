import React, { useContext } from "react";
import "../../styles/checkout.css";
import CartItem from "./CartItem";

const ConfirmedBookings = ({bookingList}) => {
  return (
    <div className="checkout__container" style={{paddingTop:'0px'}}>
      <hr />
      <h2>YOUR PRODUCTS</h2>
      <div className="checkout__details" >
        <table className="cart__details" style={{ minWidth: "100%" }}>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>Total</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody className="cart__row">
            {bookingList.map((item) => (
              <CartItem key={item.id} car={item} display="none" />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConfirmedBookings;
