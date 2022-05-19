import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
