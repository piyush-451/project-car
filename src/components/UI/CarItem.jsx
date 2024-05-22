import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, carName, rating, pricePerKm, pricePerNight, noOfSeats, parkingCharges, distancePerDay} = props.item;

  return (
    <Col lg="12" md="12" sm="12" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="car__rating text-center mt-">
            {rating} <span> review</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4 flex-wrap">
            <span className=" d-flex align-items-center gap-1">
            <i class="fa-solid fa-sack-xmark" aria-hidden="true"></i> {`${pricePerKm}rs/km`}
            </span>
            <span className=" d-flex align-items-center gap-1">
            <i class="ri-moon-fill"></i> {`${pricePerNight}rs/night`}
            </span>
            <span className=" d-flex align-items-center gap-1">
            <i class="ri-parking-box-fill"></i> {parkingCharges}
            </span>
            <span className=" d-flex align-items-center gap-1">
            <i class="ri-group-fill"></i> {`${noOfSeats} people`}
            </span>
            <span className=" d-flex align-items-center gap-1">
            <i class="fa-solid fa-road" aria-hidden="true"></i> {`${distancePerDay}km/Day`}
            </span>
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-timer-flash-line"></i> {speed} */}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
