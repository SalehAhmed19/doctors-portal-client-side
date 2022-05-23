import React from "react";
import { toast } from "react-toastify";

const Doctors = ({ doctor, index, refetch, setDeleteDoctor }) => {
  const { name, email, img, specialty } = doctor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error modal-button"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default Doctors;
