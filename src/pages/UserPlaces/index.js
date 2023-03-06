import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceList from "./components/PlaceList";
import { getPlaces } from "../../util/place";

function UserPlaces() {
  const { userId } = useParams();
  const [places, setPlaces] = useState([]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setPlaces((state) => state.filter((place) => place.id !== deletedPlaceId));
  };

  useEffect(() => {
    getPlaces(setPlaces, userId);
  }, [userId]);

  return <PlaceList places={places} onDeletePlace={placeDeletedHandler} />;
}

export default UserPlaces;
