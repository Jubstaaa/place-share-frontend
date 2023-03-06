import axios from "axios";
import toast from "react-hot-toast";

export const addPlace = (formState, auth, navigate) => {
  const loading = toast.loading("Place Adding...");
  axios
    .post(
      "http://localhost:9230/api/places",
      {
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        address: formState.inputs.address.value,
        creator: auth.userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      toast.success("Successfully added", {
        id: loading,
      });
      navigate(`/${auth.userId}/places`);
    })
    .catch((err) => {
      toast.error(err.response?.data.message, {
        id: loading,
      });
    });
};

export const getPlaces = async (setPlaces, userId) => {
  axios
    .get(`http://localhost:9230/api/places/user/${userId}`)
    .then((res) => {
      setPlaces(res.data.places);
    })
    .catch((err) => {
      toast.error(err.response?.data.message || err.message);
    });
};

export const getPlaceById = async (setPlace, placeId) => {
  axios
    .get(`http://localhost:9230/api/places/${placeId}`)
    .then((res) => {
      setPlace(res.data.place);
    })
    .catch((err) => {
      toast.error(err.response?.data.message || err.message);
    });
};

export const updatePlaceById = async (formState, placeId, navigate, auth) => {
  const loading = toast.loading("Place Updating...");
  axios
    .patch(`http://localhost:9230/api/places/${placeId}`, {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
    })
    .then((res) => {
      toast.success("Successfully updated", {
        id: loading,
      });
      navigate(`/${auth.userId}/places`);
    })
    .catch((err) => {
      toast.error(err.response?.data.message || err.message);
    });
};

export const deletePlace = async (placeId, navigate, auth) => {
  const loading = toast.loading("Place Deleting...");
  axios
    .delete(`http://localhost:9230/api/places/${placeId}`)
    .then((res) => {
      toast.success("Successfully deleted", {
        id: loading,
      });
      navigate(`/${auth.userId}/places`);
    })
    .catch((err) => {
      toast.error(err.response?.data.message || err.message);
    });
};
