import React from 'react'
import FindCarForm2 from '../components/UI/FindCarForm2'
import CommonSection from '../components/UI/CommonSection'
import PackageItem from '../components/UI/PackageItem'
import img1 from "../assets/all-images/temple-img/ujjain.jpg";
import img2 from "../assets/all-images/temple-img/indore.jpg";
import img3 from "../assets/all-images/temple-img/tajmahel.jpg";
import "../styles/package.css"

const Packages = () => {
  const defaultItem = {
    carName: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDateTime: "", // Use ISO format for date-time
    dropOffDateTime: "", // Use ISO format for date-time
  };
  return (
    <>
      <CommonSection title="Packages"/>
      <div className='package__container'>
      <PackageItem img={img1}/>
      <PackageItem img={img2}/>
      <PackageItem img={img3}/>
      <FindCarForm2 defaultItem={defaultItem}/>
      </div>
    </>
  )
}

export default Packages