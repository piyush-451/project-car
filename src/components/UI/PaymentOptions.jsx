import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { ConfirmedOrdersContext } from "../../store/confirm-booking-store";
import displayRazorpay from "../../utils/PaymentGateWay";

const PaymentOptions = ({ bookingList, clearCart }) => {
  const { confirmOrder } = useContext(ConfirmedOrdersContext);

  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePlaceOrder = async () => {
    try {
      if (selectedOption === "payViaInstamojo") {
        // Await the displayRazorpay function to complete the payment process
        const paymentResult = await displayRazorpay();

        if (paymentResult.success) {
          // Check if the payment was successful
          // Confirm the order
          confirmOrder(bookingList);

          // Clear the cart
          clearCart();

          // Navigate to the account page
          navigate("/account");
        } else {
          // Handle payment failure
          console.error("Payment failed");
          // Optionally, show a message to the user or take other actions
        }
      } else if (selectedOption === "payAfterRide") {
        // For pay after ride option, no payment is required now
        // Confirm the order
        confirmOrder(bookingList);

        // Clear the cart
        clearCart();

        // Navigate to the account page
        navigate("/account");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      // Handle any errors that occurred during the payment process
    }
  };

  const formGroupStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "-18px",
  };

  const labelStyle = {
    marginLeft: "10px",
    marginTop: "12px",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Choose Your Payment Method</h3>
      <FormGroup style={formGroupStyle}>
        <Input
          type="radio"
          name="paymentOption"
          value="payAfterRide"
          checked={selectedOption === "payAfterRide"}
          onChange={handleOptionChange}
        />
        <Label style={labelStyle}>Pay after ride</Label>
      </FormGroup>

      {selectedOption === "payAfterRide" && (
        <div
          style={{
            marginTop: "-10px",
            backgroundColor: "#e9ecef",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h5>Pay after the ride</h5>
          {/* You can add more details or inputs here if needed */}
        </div>
      )}

      <FormGroup style={formGroupStyle}>
        <Input
          type="radio"
          name="paymentOption"
          value="payViaInstamojo"
          checked={selectedOption === "payViaInstamojo"}
          onChange={handleOptionChange}
        />
        <Label style={labelStyle}>Pay Online</Label>
      </FormGroup>

      {selectedOption === "payViaInstamojo" && (
        <div
          style={{
            marginTop: "-18px",
            backgroundColor: "#e9ecef",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h5>Pay by Credit Card/Debit Card/Net Banking/UPI</h5>
          {/* You can add more details or inputs here if needed */}
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <Button
        style={{
          backgroundColor: "#e9a31b",
          padding: "10px 20px",
          borderColor: "white",
        }}
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </div>
  );
};

export default PaymentOptions;
