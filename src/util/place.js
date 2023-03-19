import axios from "axios";
import toast from "react-hot-toast";

export const addPlace = (formState, auth, navigate) => {
  const loading = toast.loading("Place Adding...");
  const formData = new FormData();
  formData.append("title", formState.inputs.title.value);
  formData.append("description", formState.inputs.description.value);
  formData.append("address", formState.inputs.address.value);
  formData.append("image", formState.inputs.image.value);
  axios
    .post(process.env.REACT_APP_BACKEND_URL + "/places", formData, {
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    })
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
    .get(`${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`)
    .then((res) => {
      setPlaces(res.data.places);
    })
    .catch((err) => {
      toast.error(err.response?.data.message || err.message);
    });
};

export const getPlaceById = async (setPlace, placeId) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`)
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
    .patch(
      `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
      {
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
      },
      {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      }
    )
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
    .delete(`${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`, {
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    })
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
