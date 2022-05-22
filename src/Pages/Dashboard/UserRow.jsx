import React from "react";

const UserRow = ({ user }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <tr>
      <th>1</th>
      <td>{user.email}</td>
      <td>
        <button onClick={makeAdmin} className="btn btn-primary btn-sm">
          Make Admin
        </button>
      </td>
      <td>
        <button className="btn btn-accent btn-sm">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
