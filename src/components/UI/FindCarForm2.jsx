import React, { useState, useContext, useRef,useEffect } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup, Button } from "reactstrap";

import CarRentalIcon from "@mui/icons-material/CarRental";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BookingListContext } from "../../store/booking-list-store";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import cities from "../../assets/data/citiesData";

const FindCarForm1 = ({ defaultItem }) => {
  const { addBooking } = useContext(BookingListContext);
  const carRef = useRef(null);
  const pickupRef = useRef(null);
  const dropOffRef = useRef(null);
  const navigate = useNavigate();

  const [pickUpTime, setPickUpTime] = useState(null);
  const [dropOffTime, setdropOffTime] = useState(null);

  useEffect(() => {
    if (defaultItem) {
      if (defaultItem.pickUpDateTime) {
        setPickUpTime(new Date(defaultItem.pickUpDateTime));
      }
      if (defaultItem.dropOffDateTime) {
        setdropOffTime(new Date(defaultItem.dropOffDateTime));
      }
    }
  }, [defaultItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 1;
    const carName = carRef.current.value;
    const pickUpLocation = pickupRef.current.value;
    const dropOffLocation = dropOffRef.current.value;
    const pickUpDateTime = format(pickUpTime, "yyyy-MM-dd HH:mm");
    const dropOffDateTime = format(dropOffTime, "yyyy-MM-dd HH:mm");

    addBooking(
      userId,
      carName,
      pickUpLocation,
      dropOffLocation,
      pickUpDateTime,
      dropOffDateTime
    );

    carRef.current.value = "";
    pickupRef.current.value = "";
    dropOffRef.current.value = "";
    setPickUpTime(null);
    setdropOffTime(null);

    navigate("/cart");
  };

  return (
    <div className="form__container">
      <Form className="form" onSubmit={handleSubmit}>
        <div className=" d-flex align-items-center justify-content-center flex-wrap">
          <FormGroup className="form__group" style={{ width: "100%" }}>
            <h2>Booking Vehicle</h2>
          </FormGroup>
          <FormGroup className="form__group" style={{ width: "100%" }}>
            <div className="form__label">
              <CarRentalIcon
                style={{ marginBottom: "4px", marginLeft: "4px" }}
              />
              <span>Car</span>
            </div>
            {/* <input type="text" placeholder="From address" required /> */}
            <select
              ref={carRef}
              name="product"
              id="SelectCarDropdown"
              required
            >
              <option value= {defaultItem.carName==="" ?  'Select Car' : defaultItem.carName} selected="selected" data-select2-id="2">
                {defaultItem.carName==="" ?  'Select Car' : defaultItem.carName}
              </option>
              <option value="Tempo Traveler(17 seats)">
                Tempo Traveler(17 seats)
              </option>
              <option value="Etios">Etios</option>
              <option value="Ertiga">Ertiga</option>
              <option value="Aura">Aura</option>
              <option value="Innova">Innova</option>
              <option value="Swift Dzire">Swift Dzire</option>
              <option value="INNOVA CRYSTA">INNOVA CRYSTA</option>
              <option value="Tempo Traveler(13 seats)">
                Tempo Traveler(13 seats)
              </option>
              <option value="Hundai Xcent">Hundai Xcent</option>
              {/* <option value="3296">Hundai Xcent</option> */}
            </select>
          </FormGroup>

          <FormGroup className="form__group" style={{ width: "100%" }}>
            <div className="form__label">
              <LocationOnIcon
                style={{ marginBottom: "4px", marginLeft: "4px" }}
              />
              <span>Pick-up</span>
            </div>
            <select
              ref={pickupRef}
              name="pickup_loc"
              id="pickupLocDropdown"
              aria-hidden="true"
              defaultValue={defaultItem?.pickUpLocation || ""}
              required
            >
              <option value="" data-select2-id="4">
              {defaultItem.pickUpLocation==="" ?  'Select Location' : defaultItem.pickUpLocation}
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </FormGroup>

          <FormGroup className="form__group" style={{ width: "100%" }}>
            <div className="form__label">
              <LocationOnIcon
                style={{ marginBottom: "4px", marginLeft: "4px" }}
              />
              <span>Drop-of</span>
            </div>
            {/* <input type="text" placeholder="From address" required /> */}
            <select
              ref={dropOffRef}
              name="dropOff_loc"
              id="dropOffLocDropdown"
              aria-hidden="true"
              defaultValue={defaultItem?.dropOffLocation || ""}
              required
            >
              <option value="" data-select2-id="4">
              {defaultItem.dropOffLocation==="" ?  'Select Location' : defaultItem.dropOffLocation}
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </FormGroup>

          <FormGroup className="form__group" style={{ width: "100%" }}>
            <div className="form__label">
              <CalendarMonthIcon
                style={{ marginBottom: "4px", marginLeft: "4px" }}
              />
              <span>Pick-Up</span>
            </div>
            <DatePicker
              selected={pickUpTime}
              onChange={(date) => setPickUpTime(date)}
              showTimeSelect
              dateFormat="dd-MM-yyyy HH:mm"
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              wrapperClassName="datePicker"
              placeholderText="dd-mm-yyyy"
            />
          </FormGroup>

          <FormGroup className="form__group" style={{ width: "100%" }}>
            <div className="form__label">
              <CalendarMonthIcon
                style={{ marginBottom: "4px", marginLeft: "4px" }}
              />
              <span>Drop-Off</span>
            </div>
            <DatePicker
              selected={dropOffTime}
              onChange={(date) => setdropOffTime(date)}
              showTimeSelect
              dateFormat="dd-MM-yyyy HH:mm"
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              wrapperClassName="datePicker"
              placeholderText="dd-mm-yyyy"
              defaultValue={defaultItem?.dropOffDateTime || ""}
            />
          </FormGroup>

          <FormGroup
            className="form__group"
            style={{ width: "100%", marginTop: "45px" }}
          >
            <Button
              style={{
                backgroundColor: "#e9a31b",
                padding: "10px 35px",
                borderColor: "white",
              }}
            >
              Book Now
            </Button>{" "}
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default FindCarForm1;
