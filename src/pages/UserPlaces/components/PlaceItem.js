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

  const onImageError = (e) => {
    e.target.src = "/images/place.jpg";
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
        <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg w-full"
            src={item.image}
            alt={item.title}
            onError={onImageError}
          />
          <div className="p-5">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {item.title}
            </h2>
            <h3 className="mb-2">{item.address}</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <div className="flex flex-col md:flex-row">
              <Button
                type="button"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={openMapHandler}
              >
                VIEW ON MAP
              </Button>
              {auth.userId === item.creator && (
                <>
                  <Button info to={`/places/${item.id}`}>
                    EDIT
                  </Button>
                  <Button danger onClick={showDeleteWarningHandler}>
                    DELETE
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default PlaceItem;
