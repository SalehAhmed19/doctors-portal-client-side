import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/booking?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={a._id} a={a}>
                <th>{index + 1}</th>
                <td>{a.patient}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
