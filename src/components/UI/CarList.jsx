import React from "react";
import CarItem from "./CarItem";
import {Col } from "reactstrap";

const CarList = ({carData}) => {
  return (
    <>
      {carData.map((item) => (
        <Col lg="4" md="4" sm="6">
          <CarItem item={item} key={item.id} />
        </Col>
      ))}
    </>
  );
};

export default CarList;
