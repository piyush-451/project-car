import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import FindCarForm from "../components/UI/FindCarForm2";
import ServiceSection from "../components/UI/ServiceSection";

const Services = () => {
  const defaultItem = {
    carName: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDateTime: "", // Use ISO format for date-time
    dropOffDateTime: "", // Use ISO format for date-time
  };
  return (
    <Helmet title="Services">
      <CommonSection title="Our Popular Servives" />
      <ServiceSection />
      <div style={{ padding: "0 50px" }}>
        <FindCarForm defaultItem={defaultItem}/>
      </div>
    </Helmet>
  );
};

export default Services;
