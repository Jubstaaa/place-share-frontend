import axios from "axios";
import toast from "react-hot-toast";

export const getUsers = async (setUsers) => {
  axios
    .get(process.env.REACT_APP_BACKEND_URL + "/users")
    .then((res) => {
      setUsers(res.data.users);
    })
    .catch((err) => {
      toast.error(err.response?.data.message || err.message);
    });
};

export const login = async (formState, auth) => {
  const loading = toast.loading("Signing In...");
  axios
    .get(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
      {
        params: {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      toast.success("Successfully login", {
        id: loading,
      });
      auth.login(res.data.userId, res.data.token);
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        id: loading,
      });
    });
};

export const signup = (formState, auth) => {
  const loading = toast.loading("Signing Up...");
  const formData = new FormData();
  formData.append("email", formState.inputs.email.value);
  formData.append("name", formState.inputs.name.value);
  formData.append("password", formState.inputs.password.value);
  formData.append("image", formState.inputs.image.value);
  axios
    .post(process.env.REACT_APP_BACKEND_URL + "/users/signup", formData)
    .then((res) => {
      toast.success("Successfully registered", {
        id: loading,
      });
      auth.login(res.data.userId, res.data.token);
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        id: loading,
      });
    });
};
