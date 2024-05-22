import React from "react";
import { Row, Col, Button } from "reactstrap"; // Import Button from Reactstrap

import { border } from "@mui/system";

const PackageItem = ({img}) => {
  return (
    <div className="card__container">
      <Row>
        <Col lg="4" md="4" sm="12">
          <img src={img} alt="Ujjain Temple" className="img-box" />
        </Col>
        <Col lg="4" md="4" sm="12" className="d-flex align-items-center">
          <div>
            <h3>Package 1</h3>
            <p>Bhopal to Indore</p>
            <p>
              <strong>Price:</strong> Rs 3000
            </p>
            <p>
              <strong>Car Type:</strong> Sedan
            </p>
            <Button
              style={{
                backgroundColor: "#e9a31b",
                padding: "10px 20px",
                borderColor: "white",
              }}
            >
              Book Now
            </Button>{" "}
            {/* Add the Button with custom color */}
          </div>
        </Col>
        <Col lg="4" md="4" sm="12"></Col>
      </Row>
    </div>
  );
};

export default PackageItem;
