import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";

function BillingAddress({ token, parent }) {
  const [addresses, setAddressess] = useState([]);
  const endpoint =
    "http://127.0.0.1:5001/car-rental-apis/us-central1/app/api/getAllAddresses";
  const saveAddressEndpoint =
    "http://127.0.0.1:5001/car-rental-apis/us-central1/app/api/addAddress";

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    streetAddress: "",
    city: "",
    phone: "",
    pinCode: "",
    state: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const responce = await axios.post(saveAddressEndpoint, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("Address saved successfully: ", responce.data);

      setFormData({
        name: "",
        country: "",
        streetAddress: "",
        city: "",
        phone: "",
        pinCode: "",
        state: "",
      });
    } catch (error) {
      console.log("Error saving the data ", error);
    }
  };

  useEffect(() => {
    axios
      .get(endpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data.response);
        setAddressess(res.data.response);
      });
  }, []);

  return (
    <div>
      <h2>Billing Address</h2>
      <form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="name" className="form-label me-3">
              Name <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="country" className="form-label me-3">
              Country/Region <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="country"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="state" className="form-label me-3">
              State <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <select
              className="form-select"
              id="state"
              required
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="city" className="form-label me-3">
              Town / City <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="streetAddress" className="form-label me-3">
              Street Address <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="streetAddress"
              required
              value={formData.streetAddress}
              onChange={handleChange}
            />
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="pinCode" className="form-label me-3">
              PIN Code <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="pinCode"
              required
              value={formData.pinCode}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="phone" className="form-label me-3">
              Phone <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </Col>
          {parent === "dashboard" && (
            <Col sm="6" className="d-flex align-items-center">
              <Button
                style={{
                  backgroundColor: "#e9a31b",
                  padding: "10px 20px",
                  borderColor: "white",
                }}
              >
                Save Address
              </Button>
            </Col>
          )}
        </Row>
      </form>
    </div>
  );
}

export default BillingAddress;
