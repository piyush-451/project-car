import React from "react";
import "../../styles/reserve-car.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const ReserveCarSection = () => {
  return (
    <section className="reserve__car">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="reserve__car-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title reserve__car-title">
              Best Car Rental in Bhopal
            </h2>

            <p className="reserve__car-content">
              Baba MahaKal is a convenient, on demand taxi service provider
              delivering excellence day and night. If you’re looking for a
              trustworthy company who can offer a variety of vehicles at
              affordable prices then look no further. Get a ride any time day or
              night. Our taxi service is available 24 hours a day, 365 days a
              year.
            </p>

            <Link to="/cars">
              <button className="btn mt-4">Reserve Now</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReserveCarSection;
