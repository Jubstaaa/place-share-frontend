import axios from "axios";
import toast from "react-hot-toast";


export const getUsers = async (setUsers) => {
  axios
    .get("http://localhost:9230/api/users")
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
      "http://localhost:9230/api/users/login",
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
      auth.login(res.data.user.id);
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        id: loading,
      });
    });
};

export const signup = (formState, auth) => {
  const loading = toast.loading("Signing Up...");
  axios
    .post(
      "http://localhost:9230/api/users/signup",
      {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      toast.success("Successfully registered", {
        id: loading,
      });
      auth.login(res.data.user.id);
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        id: loading,
      });
    });
};
