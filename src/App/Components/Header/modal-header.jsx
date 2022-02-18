import React from "react";
import "./modal-header.css";
import { ListLocation } from "./listcardlocation";

export const ModalHeader = props => {
  const {
    city,
    isOpen,
    CloseModal,
    OpenModal,
    adults,
    children,
    guest,
    locations,
    setAdults,
    setChildren,
    setGuest,
    setLocations,
    ModalLocation,
    setModalLocation,
    ModalGuest,
    setModalGuest,
    location,
    setLocation,
    handleContext,
    Searchmodal

  } = props;

  const handleModalLocation = () => {
    setModalGuest(false);
    setModalLocation(!setModalLocation);
  };

  const handleModalGuest = () => {
    setModalLocation(false);
    setModalGuest(!setModalGuest);
  };


  return (
    <>
      <div className="Container-modal-open">
        <div className="Container-modal-open-City" >
          <p>add</p>
          <p>{location}</p>
          <div className="Container-modal-open-header-search">

            <ListLocation locations={locations} Searchmodal={Searchmodal} handleContext={handleContext} />
          </div>
        </div>

        <div className="list"> </div>
        <div className="Container-modal-open-guest" onClick={handleModalGuest}>
          <p>{guest} add guest</p>
        </div>

        <div className="Container-modal-open-Search">
          <button id="Button">
            <img src={Searchmodal} alt="" />
            <p>Search</p>
          </button>
        </div>
      </div>
    </>

  );
};