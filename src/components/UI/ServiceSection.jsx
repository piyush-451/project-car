import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { ServiceSectionData } from "../../assets/data/serviceData";
import "../../styles/ServiceSection.css";

const ServiceSection = () => {
  return (
    <>
      {ServiceSectionData.map((item, index) => (
        <SectionElement item={item} key={index} />
      ))}
    </>
  );
};

const SectionElement = ({ item: { title, img, desc, id } }) => {
  const bgColor = id%2===1 ? "#eeeeee" : "#fff";
  console.log(bgColor);
  return <section className="section__container overflow-hidden" style={{backgroundColor : bgColor}}>
    <Row>
      {id%2===1 && <ImageContainer img={img} />}
      {id%2===0 && <ContentContainer title={title} desc={desc} />}
      {id%2===1 && <ContentContainer title={title} desc={desc} />}
      {id%2===0 && <ImageContainer img={img} />}
    </Row>
  </section>
};

const ImageContainer = ({img}) => (
  <Col lg="6" md="6" sm="12">
    <div className="img__container d-flex align-item-center">
      <img src={img} alt="alt-img" />
    </div>
  </Col>
);

const ContentContainer = ({title,desc}) => (
  <Col lg="6" md="6" sm="12">
    <h2 className="title" style={{color : "black" ,fontWeight : "600"}}>{title}</h2>
    <div className="description my-4">{desc}</div>
    <Link to="/cars" className="reserve__car-btn mt-4" >Reserve Now</Link>
  </Col>
);

export default ServiceSection;
