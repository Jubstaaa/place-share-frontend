import React from "react";
import Avatar from "../../../components/UIElements/Avatar";
import { Link } from "react-router-dom";
import Card from "../../../components/UIElements/Card";

function UserItem({ item }) {
  return (
    <li className="m-4 w-full md:w-1/3">
      <Card>
        <Link
          to={`${item.id}/places`}
          className="flex items-center w-full h-full p-4 text-white bg-[#292929] hover:bg-[#ffd900] group"
        >
          <div className="w-16 h-16 mr-4">
            <Avatar image={item.image} alt={item.name} />
          </div>
          <div>
            <h2 className="text-2xl mb-2 text-[#ffd900] group-hover:text-[#292929]">
              {item.name}
            </h2>
            <h3 className="font-medium group-hover:text-[#292929]">
              {item.places} {item.places === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UserItem;
