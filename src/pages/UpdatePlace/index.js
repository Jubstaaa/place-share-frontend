import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/FormElements/Input";
import Button from "../../components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";
import { useForm } from "../../hooks/form-hook";
import Card from "../../components/UIElements/Card";

const places = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

function UpdatePlace() {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
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

  const identifiedPlace = places.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            valid: true,
          },
          description: {
            value: identifiedPlace.description,
            valid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="text-center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Card>
          <h2>Loading</h2>
        </Card>
      </div>
    );
  } else {
    return (
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
          value={formState.inputs.title.value}
          valid={formState.inputs.title.valid}
        />
        <Input
          id="description"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.valid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    );
  }
}

export default UpdatePlace;
