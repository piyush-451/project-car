import React, { useState, useContext, useRef } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

import CarRentalIcon from "@mui/icons-material/CarRental";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BookingListContext } from "../../store/booking-list-store";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const FindCarForm1 = () => {
  const { addBooking } = useContext(BookingListContext);
  const carRef = useRef(null);
  const pickupRef = useRef(null);
  const dropOffRef = useRef(null);
  const navigate = useNavigate();

  const [pickUpTime, setPickUpTime] = useState(null);
  const [dropOffTime, setdropOffTime] = useState(null);

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
    <Form className="form" onSubmit={handleSubmit} style={{boxShadow : 'none'}}>
      <div className=" d-flex align-items-center justify-content-center flex-wrap">
        <FormGroup className="form__group">
          <div className="form__label">
            <CarRentalIcon style={{ marginBottom: "4px", marginLeft: "4px" }} />
            <span>Car</span>
          </div>
          {/* <input type="text" placeholder="From address" required /> */}
          <select ref={carRef} name="product" id="SelectCarDropdown" required>
            <option value="" selected="selected" data-select2-id="2">
              Select Car
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

        <FormGroup className="form__group" >
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
            required
          >
            <option value="" data-select2-id="4">
              Select Location
            </option>
            <option value="Others">Others</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Khajuraho">Khajuraho</option>
            <option value="Orchha">Orchha</option>
            <option value="Maihar">Maihar</option>
            <option value="Rewa">Rewa</option>
            <option value="Sagar">Sagar</option>
            <option value="Jhansi">Jhansi</option>
            <option value="Ashoknagar">Ashoknagar</option>
            <option value="Guna">Guna</option>
            <option value="Sivani">Sivani</option>
            <option value="Balaghat">Balaghat</option>
            <option value="Chhindwara">Chhindwara</option>
            <option value="Pachmadhi">Pachmadhi</option>
            <option value="Betul">Betul</option>
            <option value="Itarsi">Itarsi</option>
            <option value="Hoshangabad">Hoshangabad</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Indore">Indore</option>
            <option value="Jabalpur">Jabalpur</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <div className="form__label">
            <LocationOnIcon
              style={{ marginBottom: "4px", marginLeft: "4px" }}
            />
            <span>Drop-of</span>
          </div>
          {/* <input type="text" placeholder="From address" required /> */}
          <select
            ref={dropOffRef}
            name="pickup_loc"
            id="pickupLocDropdown"
            aria-hidden="true"
            required
          >
            <option value="" data-select2-id="4">
              Select Location
            </option>
            <option value="Others">Others</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Khajuraho">Khajuraho</option>
            <option value="Orchha">Orchha</option>
            <option value="Maihar">Maihar</option>
            <option value="Rewa">Rewa</option>
            <option value="Sagar">Sagar</option>
            <option value="Jhansi">Jhansi</option>
            <option value="Ashoknagar">Ashoknagar</option>
            <option value="Guna">Guna</option>
            <option value="Sivani">Sivani</option>
            <option value="Balaghat">Balaghat</option>
            <option value="Chhindwara">Chhindwara</option>
            <option value="Pachmadhi">Pachmadhi</option>
            <option value="Betul">Betul</option>
            <option value="Itarsi">Itarsi</option>
            <option value="Hoshangabad">Hoshangabad</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Indore">Indore</option>
            <option value="Jabalpur">Jabalpur</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
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

        <FormGroup className="form__group">
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
          />
        </FormGroup>

        <FormGroup className="form__group" >
          <button className="btn find__car-btn">Book Now</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm1;
