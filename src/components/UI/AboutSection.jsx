import React from "react";
import { Container, Row, Col } from "reactstrap";

const AboutSection = ({ AboutData }) => {
  return (
    <>
      {AboutData.map((item, index) => (
        <AboutSectionElement item={item} key={index} />
      ))}
    </>
  );
};

const AboutSectionElement = ({ item: { title, img, desc1, desc2 ,id} }) => (
  <section className="about__page-section">
    <Container>
      <Row>
        {id%2===1 && <ImageContainer img={img} />}
        {id%2===0 && <ContentContainer title={title} desc1={desc1} desc2={desc2} />}
        {id%2===1 && <ContentContainer title={title} desc1={desc1} desc2={desc2} />}
        {id%2===0 && <ImageContainer img={img} />}
      </Row>
    </Container>
  </section>
);

const ImageContainer = ({ img }) => (
  <Col lg="6" md="6" sm="12">
    <div className="about__page-img">
      <img src={img} alt="" className="w-100 rounded-3" />
    </div>
  </Col>
);

const ContentContainer = ({ title, desc1, desc2 }) => (
  <Col lg="6" md="6" sm="12">
    <div className="about__page-content">
      <h2 className="section__title">{title}</h2>

      <p className="section__description">{desc1}</p>

      <p className="section__description">{desc2}</p>
    </div>
  </Col>
);

export default AboutSection;
