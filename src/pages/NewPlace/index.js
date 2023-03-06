import Input from "../../components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../util/validators";
import Button from "../../components/FormElements/Button";
import { useForm } from "../../hooks/form-hook";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { addPlace } from "../../util/place";
import { useNavigate } from "react-router-dom";

function NewPlace() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        idValid: false,
      },
      description: {
        value: "",
        idValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    addPlace(formState, auth, navigate);
  };
  return (
    <form
      className="relative mx-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white"
      onSubmit={placeSubmitHandler}
    >
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
}

export default NewPlace;
