import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm1 from "../components/UI/FindCarForm1";
import Welcome from "../components/UI/Welcome";
import ServicesList from "../components/UI/ServicesList";
import CarCarousal from "../components/UI/CarCarousal";
import Benifits from "../components/UI/Benifits";
import ReserveCarSection from "../components/UI/ReserveCarSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

import carData from "../assets/data/carData";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm1 />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <Welcome />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========== car offer section ============= */}
      <CarCarousal CarData={carData} />

      {/* =============== why chooses us section========== */}
      <Benifits/>
      {/* =========== Reserve car section ============ */}
      <ReserveCarSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
