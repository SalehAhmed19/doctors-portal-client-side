import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="lg:flex justify-center items-center mt-56"
    >
      <div className="lg:flex-1">
        <img className="mt-[-100px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="lg:flex-1 p-4 lg:p-0">
        <h3 className="text-xl text-primary font-bold">Make Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          libero. Nam veritatis, laboriosam consequatur sit quod molestiae
          pariatur saepe et dignissimos maiores illum magnam nesciunt, ipsa
          dolorum explicabo deserunt culpa!
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
