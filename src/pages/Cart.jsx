import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import CartItem from "../components/UI/CartItem";
import EmptyContainer from "../components/UI/EmptyContainer";
import { BookingListContext } from "../store/booking-list-store";
import "../styles/cart.css";

const Cart = () => {
  const { bookingList, updateBooking, deleteBooking } =
    useContext(BookingListContext);
  const navigate = useNavigate();

  function goToCheckout() {
    navigate("/checkout");
  }

  // useEffect(()=>{},[bookingList]);

  return (
    <>
      {bookingList.length === 0 ? (
        <div style={{padding :'80px'}}>
        <EmptyContainer parent="booking" />
        </div>
      ) : (
        <div>
          <Row>
            <Col lg="9" md="12" sm="12">
              <h1 style={{ width: "80%", margin: "35px auto", color: "black" }}>
                Cart Details
              </h1>
            </Col>
          </Row>
          <div className="cart-container" style={{ padding: "10px 40px" }}>
            <Row>
              <Col lg="9" md="12" sm="12">
                <table className="cart__details" style={{ width: "64vw" }}>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Car</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="cart__row">
                    {bookingList.map((item) => (
                      <CartItem
                        key={item.id}
                        car={item}
                        updateBooking={updateBooking}
                        deleteBooking={deleteBooking}
                        display="visible"
                      />
                    ))}
                  </tbody>
                </table>
              </Col>
              <Col lg="3" md="12" sm="12">
                <div className="cart__payment-details">
                  <div className="payment__heading">Booking Totals</div>
                  <div style={{ marginLeft: "17px" }}>
                    <span>
                      <strong>SUBTOTAL</strong>
                    </span>
                    <span>{1000*bookingList.length}</span>
                  </div>
                  <hr className="hr-dd" />
                  <div style={{ marginLeft: "17px" }}>
                    <span>
                      <strong>Price</strong>
                    </span>
                    <span>{1000*bookingList.length}</span>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#e9a31b",
                      padding: "10px 15px",
                      borderColor: "white",
                      margin: "15px 25px",
                      width: "80%",
                    }}
                    onClick={goToCheckout}
                  >
                    PROCEED TO CHECKOUT
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
