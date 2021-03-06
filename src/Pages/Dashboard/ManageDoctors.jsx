import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfimModal from "./DeleteConfimModal";
import Doctors from "./Doctors";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:4000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Manage Doctors {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <Doctors
                key={doctor._id}
                index={index}
                doctor={doctor}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
        </table>
        {deleteDoctor && (
          <DeleteConfimModal
            deleteDoctor={deleteDoctor}
            refetch={refetch}
            setDeleteDoctor={setDeleteDoctor}
          ></DeleteConfimModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
