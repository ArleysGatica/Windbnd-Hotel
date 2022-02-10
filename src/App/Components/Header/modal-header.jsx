import React from "react";
import Searchmodal from "../../../Images/Search-modal.png";
import "./modal-header.css";

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
        <ul className="Container-modal-open-City" onClick={handleModalLocation}>
          <li>
            add location
            <ul>
              <li>
                <p>{locations}</p>
              </li>
            </ul>
          </li>
        </ul>
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
