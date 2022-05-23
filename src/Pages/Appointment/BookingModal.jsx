import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const clientName = event.target.clientName.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const formatedDate = format(date, "PP");
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot: slot,
      patient: user.displayName,
      email: email,
      phone: phone,
    };
    fetch("https://floating-thicket-06747.herokuapp.com/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formatedDate} at ${slot}!`);
        } else {
          toast.error(
            `Already booked an appointment on, ${data.booking?.date} at ${data.booking?.slot}!`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              value={format(date, "PP")}
              required
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              value={user?.displayName || ""}
              name="clientName"
              required
              disabled
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="email"
              value={user?.email || ""}
              name="email"
              required
              disabled
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              required
            />
            <div className="modal-action">
              <input
                value="Submit"
                type="submit"
                htmlFor="booking-modal"
                className="btn w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
