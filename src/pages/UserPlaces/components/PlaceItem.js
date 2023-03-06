import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/UIElements/Card";
import Button from "../../../components/FormElements/Button";
import Modal from "../../../components/UIElements/Modal";
import Map from "../../../components/UIElements/Map";
import { AuthContext } from "../../../context/auth-context";
import { deletePlace } from "../../../util/place";

function PlaceItem({ item, onDelete }) {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);

  const cancelDeleteWarningHandler = () => setShowConfirmModal(false);

  const confirmDeleteWarningHandler = async () => {
    setShowConfirmModal(false);
    await deletePlace(item.id, navigate, auth);
    onDelete(item.id);
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
              src={item.image}
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
            {auth.userId === item.creator && (
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
