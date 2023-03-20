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
        <ul className="container mx-auto grid grid-cols-1 px-10 md:px-0 md:grid-cols-3 gap-12">
          {users.map((user) => (
            <UserItem key={user.id} item={user} />
          ))}
        </ul>
      )}
    </>
  );
}

export default UsersList;
