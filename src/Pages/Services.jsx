import React from "react";
import MobileMenu from "../Components/MobileMenu";

import { services } from "../data";

const Services = () => {
  return (
    <>
      <main className="servie_middle about_middle">
        <h2 className="services_h2">
          Services <span className="me">Offered</span>
        </h2>

        <div className="service-flex hidden">
         <ServicesCard/>
        </div>

        <MobileMenu/>
      </main>
    </>
  );
};


const ServicesCard = ()=>(
    
  services.map(({image, service_name, service_detail}) => {
    return (
      <div className="service-box">
        <img src={image} alt={service_name} className="service-icon" />
        <h4>{service_name}</h4>
        <p className="service-p">{service_detail}</p>
      </div>
    );
  })
 
)

export default Services;
