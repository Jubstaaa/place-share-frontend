import UsersList from "./components/UsersList";
import { useState } from "react";

function Users() {
  const users = [
    {
      id: "u1",
      name: "İlker Balcılar",
      image:
        "https://avatars.githubusercontent.com/u/9998250?s=400&u=d02f5b99b62315ddef450cfb7436fdd5fe832ed6&v=4",
      places: 3,
    },
  ];
  return <UsersList users={users} />;
}

export default Users;
