import React from "react";
import UserItem from "./UserItem";
import Card from "../../../components/UIElements/Card";

function UsersList({ users }) {
  return (
    <>
      {users.length === 0 ? (
        <Card>
          <div className="text-center">
            <h2>No users found.</h2>
          </div>
        </Card>
      ) : (
        <ul className="m-auto w-11/12 max-w-3xl flex justify-center flex-wrap">
          {users.map((user) => (
            <UserItem key={user.id} item={user} />
          ))}
        </ul>
      )}
    </>
  );
}

export default UsersList;
