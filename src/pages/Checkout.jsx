import React, { useContext } from "react";
import { Col } from "reactstrap";
import "../styles/checkout.css";
import BillingAddress from "../components/UI/BillingAddress";
import CartItem from "../components/UI/CartItem";
import { BookingListContext } from "../store/booking-list-store";
import PaymentOptions from "../components/UI/PaymentOptions";

const Checkout = () => {
  const { bookingList ,clearAllBookings } = useContext(BookingListContext);

  return (
    <div className="checkout__container">
      <p className="">
        <strong>Note: </strong>Maximum Distance Limit : 250 km /day
      </p>
      <div className="checkout__address">
        <BillingAddress />
      </div>
      <br />
      <hr />
      <br />
      <h2>YOUR PRODUCTS</h2>
      <div className="checkout__details">
        <table className="cart__details" style={{ minWidth: "100%" }}>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>SUBTOTAL</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody className="cart__row">
            {bookingList.map((item) => (
              <CartItem key={item.id} car={item} display="none" />
            ))}
            <tr>
              <td
                style={{
                  width: "50%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <strong>TOTAL</strong>
              </td>
              <td style={{ width: " 12.5%" }}>{1000*bookingList.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaymentOptions bookingList = {bookingList} clearCart = {clearAllBookings}/>
    </div>
  );
};

export default Checkout;
