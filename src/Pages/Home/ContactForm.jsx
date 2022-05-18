import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactForm = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="py-9"
    >
      <h3 className="text-primary font-bold text-center">Contact Us</h3>
      <h2 className="text-4xl text-center text-white">Stay Connect with Us</h2>
      <form className="flex flex-col items-center">
        <input
          style={{ height: "48px" }}
          className="block my-4 rounded-xl pl-5 w-3/4 lg:w-96"
          type="email"
          placeholder="Email Address"
        />
        <input
          style={{ height: "48px" }}
          className="block my-4 rounded-xl pl-5 w-3/4 lg:w-96"
          type="text"
          placeholder="Subject"
        />
        <textarea
          style={{ height: "136px" }}
          className="block my-4 rounded-xl pl-5 pt-3 w-3/4 lg:w-96"
          type="text"
          placeholder="Your massage"
        />
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
