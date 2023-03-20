import UsersList from "./components/UsersList";
import { useEffect, useState } from "react";
import { getUsers } from "../../util/user";
import Loader from "../../components/UIElements/Loader";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers(setUsers, setLoading);
  }, []);

  if(loading){
    return <Loader/>
  }else{
    return <UsersList users={users} />;
  }

}

export default Users;
