import React, { useState, useContext } from "react";
import Card from "../../../components/UIElements/Card";
import Button from "../../../components/FormElements/Button";
import Modal from "../../../components/UIElements/Modal";
import Map from "../../../components/UIElements/Map";
import { AuthContext } from "../../../context/auth-context";

function PlaceItem({ item }) {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);

  const cancelDeleteWarningHandler = () => setShowConfirmModal(false);

  const confirmDeleteWarningHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={item.address}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="h-80 w-full">
          <Map center={item.location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure?"
        footerClass=""
        footer={
          <>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteWarningHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="my-4">
        <Card>
          <div className="w-full h-48 mr-6 md:h-80">
            <img
              className="w-full h-full object-cover"
              src={item.imageUrl}
              alt={item.title}
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="mb-2">{item.title}</h2>
            <h3 className="mb-2">{item.address}</h3>
            <p className="mb-2">{item.description}</p>
          </div>
          <div className="p-4 text-center border border-[#ccc]">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <>
                <Button to={`/places/${item.id}`}>EDIT</Button>
                <Button danger onClick={showDeleteWarningHandler}>
                  DELETE
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
