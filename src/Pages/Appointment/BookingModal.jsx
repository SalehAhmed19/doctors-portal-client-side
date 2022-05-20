import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
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
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              required
            />
            <input
              className="border block h-12 w-full pl-5 rounded-md my-3"
              type="email"
              value={user?.email || ""}
              name="email"
              required
              disabled
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
