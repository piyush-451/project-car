import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import CarItem from "./CarItem";

const CarCarousal = ({ CarData }) => {
  const newCarData = [];
  const itemsPerRow = 2;
  for (let i = 0; i < CarData.length; i += itemsPerRow) {
    newCarData.push(CarData.slice(i, i + itemsPerRow));
  }


  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h6 className="section__subtitle">Come with</h6>
            <h2 className="section__title">Hot Offers</h2>
          </Col>

          <Slider {...settings}>
            {newCarData.map((carousalRow, index) => (
              <Row key={index}>
                {carousalRow.map((item, index) => (
                  <CarItem item={item} key={index} />
                ))}
              </Row>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default CarCarousal;
