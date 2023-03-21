import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/UIElements/Card";

function UserItem({ item }) {
  const onImageError = (e) => {
    e.target.src = "/images/place.jpg";
  };

  return (
    <li className="w-full">
      <Card>
        <div class="flex flex-col items-center py-5">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`${process.env.REACT_APP_ASSET_URL}${item.image}`}
            alt={item.name}
            onError={onImageError}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {item.name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {item.places.length} {item.places.length === 1 ? "Place" : "Places"}
          </span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <Link
              to={`${item.id}/places`}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </Link>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default UserItem;
