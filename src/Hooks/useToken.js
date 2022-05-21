import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(user);
    const email = user?.user?.email;
    if (email) {
      const currentUser = { email: email };
      fetch(`http://localhost:4000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user]);
  return [token];
};
export default useToken;