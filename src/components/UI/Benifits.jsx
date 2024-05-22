import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/benifits.css";
import { BenifitsData } from "../../assets/data/serviceData";

const Benifits = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h1 style={{ fontWeight: "700" }}>Why Choose Us?</h1>
          </Col>

          {BenifitsData.map((BenifitsItem, index) => (
            <BenifitsCard item={BenifitsItem} key={index} />
          ))}
        </Row>
      </Container>

      <Stats />
    </>
  );
};

const BenifitsCard = ({ item: { title, img, desc } }) => (
  <Col lg="3" md="3" sm="6" className="md-5 text-center p-2">
    <div className="card__img mb-3">
      <img src={img} alt="alt-img" width="150px" />
    </div>
    <h5 className="card-title mb-3" style={{ fontWeight: "600" }}>
      {title}
    </h5>
    <div className="card-desc mb-3 text-left">{desc}</div>
  </Col>
);

const Stats = () => (
  <section className="stats">
    <Row>
      <Col lg="6" md="6" sm="12" className="mb-3 text-center">
        <div className="stats__number">20</div>
        <div className="stats__text">Experienced Drivers</div>
      </Col>
      <Col lg="6" md="6" sm="12" className="mb-3 text-center">
        <div className="stats__number">1000+</div>
        <div className="stats__text">Satisfied Clients</div>
      </Col>
    </Row>
    <Row>
      <Col lg="6" md="6" sm="12" className="mb-3 text-center">
        <div className="stats__number">1000K</div>
        <div className="stats__text">People Dropped</div>
      </Col>
      <Col lg="6" md="6" sm="12" className="mb-3 text-center">
        <div className="stats__number">30+</div>
        <div className="stats__text">Cars</div>
      </Col>
    </Row>
  </section>
);
export default Benifits;
