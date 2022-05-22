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
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast("Successfully made an admin");
        console.log(data);
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{user.email}</td>
      <td>
        {user.role === "Admin" ? (
          <p className="text-gray-400">Already Admin</p>
        ) : (
          <button onClick={makeAdmin} className="btn btn-primary btn-sm">
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
