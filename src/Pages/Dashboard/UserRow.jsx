import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast("Successfully made an admin");
          console.log(data);
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" ? (
          <p className="text-gray-400">Already Admin</p>
        ) : (
          <button onClick={makeAdmin} className="btn btn-secondary btn-sm">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-accent btn-sm">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
