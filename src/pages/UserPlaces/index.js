import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceList from "./components/PlaceList";
import { getPlaces } from "../../util/place";
import Loader from "../../components/UIElements/Loader";

function UserPlaces() {
  const { userId } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeDeletedHandler = (deletedPlaceId) => {
    setPlaces((state) => state.filter((place) => place.id !== deletedPlaceId));
  };

  useEffect(() => {
    getPlaces(setPlaces, userId, setLoading);
  }, [userId]);

  if (loading) {
    return <Loader />;
  } else {
    return <PlaceList places={places} onDeletePlace={placeDeletedHandler} />;
  }
}

export default UserPlaces;
