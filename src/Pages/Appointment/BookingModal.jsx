import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const clientName = event.target.clientName.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    console.log(_id, name, slot, clientName, phone, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
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
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              placeholder="Enter your name"
              name="clientName"
              required
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              required
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="email"
              placeholder="Enter your email"
              name="email"
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
