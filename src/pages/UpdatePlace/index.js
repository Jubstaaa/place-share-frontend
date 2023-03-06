import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../components/FormElements/Input";
import Button from "../../components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";
import { useForm } from "../../hooks/form-hook";
import Card from "../../components/UIElements/Card";
import { getPlaceById, updatePlaceById } from "../../util/place";
import { AuthContext } from "../../context/auth-context";

function UpdatePlace() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    getPlaceById(setPlace, placeId);
  }, []);

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: "",
      valid: false,
    },
    description: {
      value: "",
      valid: false,
    },
  });

  useEffect(() => {
    setIsLoading(true);
    if (place) {
      setFormData(
        {
          title: {
            value: place.title,
            valid: true,
          },
          description: {
            value: place.description,
            valid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, place]);

  const submitHandler = async (event) => {
    event.preventDefault();
    await updatePlaceById(formState, placeId, navigate, auth);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Card>
          <h2>Loading</h2>
        </Card>
      </div>
    );
  }
  if (!place) {
    return (
      <div className="text-center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  } else {
    return (
      <>
        {!isLoading && place && (
          <form
            onSubmit={submitHandler}
            className="relative mx-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white"
          >
            <Input
              id="title"
              element="input"
              type="text"
              label="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title."
              onInput={inputHandler}
              value={place.title}
              valid={true}
            />
            <Input
              id="description"
              label="Description"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid description (at least 5 characters)."
              onInput={inputHandler}
              value={place.description}
              valid={true}
            />
            <Button type="submit" disabled={!formState.isValid}>
              UPDATE PLACE
            </Button>
          </form>
        )}
      </>
    );
  }
}

export default UpdatePlace;
