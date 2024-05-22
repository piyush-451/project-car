import React from "react";
import img from "../../assets/all-images/cars-img/bmw-offer.png";
import CancelIcon from "@mui/icons-material/Cancel";
import CarDetails from "../../pages/CarDetails";
import { Button } from "reactstrap";

const CartItem = ({ car, updateBooking, deleteBooking, display }) => {
  // console.log(car);
  const colStyles = {
    image: { width: "8.5%", display: display },
    name: { width: "50%", whiteSpace: "nowrap", overflow: "hidden" },
    price: { width: "12.5%", display: display },
    subtotal: { width: " 12.5%" },
    actions: { width: "8.5%", display: display }, // Assuming you have an actions column
    btn: { width: "8.5%", display: display }, // Assuming you have an actions column
  };

  const CarDetails = [
    "Car",
    "Pick-up Location",
    "Drop-off Location",
    "Pick-up Date",
    "Drop-off Date",
  ];

  const keyMapping = {
    Car: "carName",
    "Pick-up Location": "pickUpLocation",
    "Drop-off Location": "dropOffLocation",
    "Pick-up Date": "pickUpDateTime",
    "Drop-off Date": "dropOffDateTime",
  };

  return (
    <>
      <tr>
        <td style={colStyles.actions}>
          <CancelIcon onClick={() => deleteBooking(car.id)} />{" "}
        </td>
        <td style={colStyles.image}>
          <img src={img} alt={car.carName} width="32px" />
        </td>
        <td style={colStyles.name}>
          {CarDetails.map((key, index) => (
            <p key={key}>
              <strong>{key}:</strong> {car[keyMapping[key]]}
            </p>
          ))}
        </td>
        <td style={colStyles.price}>1000</td>
        <td style={colStyles.subtotal}>1000</td>
        {/* <td style={colStyles.btn}>
          <Button
            style={{
              backgroundColor: "#e9a31b",
              borderColor: "white",
              // width :
            }}
          >
            UPDATE
          </Button>{" "}
        </td> */}
      </tr>
    </>
  );
};

export default CartItem;
