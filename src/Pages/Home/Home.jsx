import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="p-2">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
