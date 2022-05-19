import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
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
          <form>
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              value={format(date, "PP")}
              required
              disabled
            />
            <select className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="text"
              placeholder="Enter your name"
              required
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="number"
              placeholder="Enter your phone number"
              required
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="email"
              placeholder="Enter your email"
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
