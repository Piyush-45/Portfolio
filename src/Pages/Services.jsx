import React from 'react';
import MobileMenu from '../Components/MobileMenu';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data';

// Define the variants
const cardVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const Services = () => {
  return (
    <>
      <main className="service_middle about_middle">
        <h2 className="services_h2">
          Services <span className="me">Offered</span>
        </h2>

        <div className="service-flex hidden">
          <ServicesCard />
        </div>

        <MobileMenu />
      </main>
    </>
  );
};

const ServicesCard = () => {
  return (
    <>
      {services.map(({ image, service_name, service_detail, index}) => (
        <ServiceCardItem
          key={service_name}
          image={image}
          serviceName={service_name}
          serviceDetail={service_detail}
          index={index}
        />
      ))}
    </>
  );
};

const ServiceCardItem = ({ image, serviceName, serviceDetail, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.div
      className="service-box"
      ref={ref}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <img src={image} alt={serviceName} className="service-icon" />
      <h4>{serviceName}</h4>
      <p className="service-p">{serviceDetail}</p>
    </motion.div>
  );
};

export default Services;
