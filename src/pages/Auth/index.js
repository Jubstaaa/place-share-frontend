import React, { useContext, useState } from "react";
import Card from "../../components/UIElements/Card";
import Input from "../../components/FormElements/Input";
import Button from "../../components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";
import toast from "react-hot-toast";
import { login, signup } from "../../util/user";
import ImageUpload from "../../components/FormElements/ImageUpload";

function Auth() {
  const auth = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const [isLoginMode, setIsLoginMode] = useState(true);

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      login(formState, auth);
    } else {
      signup(formState, auth);
    }
  };

  const switchModeHandler = (event) => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="w-5/6 min-w-sm max-w-sm mx-auto my-28 text-center">
      <form onSubmit={authSubmitHandler} className="space-y-6">
        <h2 className="text-xl font-medium text-gray-900">Login Required</h2>

        {!isLoginMode && (
          <>
            <Input
              element="input"
              id="name"
              type="text"
              label="Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
            <ImageUpload id="image" onInput={inputHandler} />
          </>
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid email password (at least 6 characters)."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
}

export default Auth;
