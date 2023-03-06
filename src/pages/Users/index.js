import UsersList from "./components/UsersList";
import { useEffect, useState } from "react";
import { getUsers } from "../../util/user";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return <UsersList users={users} />;
}

export default Users;
