import React from "react";
import { toast } from "react-toastify";

const DeleteConfimModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { name, email } = deleteDoctor;
  const handleDelete = () => {
    fetch(`http://localhost:4000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast(`Doctor: ${name} is deleted`);
          setDeleteDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h5 className="font-bold text-lg text-red-500">
            Are your use you want to delete? {name}
          </h5>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfimModal;
