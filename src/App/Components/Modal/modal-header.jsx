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
  } = props;

  return (
    <>
      <div className="Container-modal-open">
        <ul className="Container-modal-open-City">
          <li>
            <p>cabecera</p>
            <ul>
              <li>
                <p>Helsinki, Finland</p>
              </li>
              <li>
                <p>Helsinki, Finland</p>
              </li>
            </ul>
          </li>
        </ul>
        <div className="Container-modal-open-guest">
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
