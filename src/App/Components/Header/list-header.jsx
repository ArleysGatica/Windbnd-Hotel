import React, { useState } from "react";
import logo from "../../../Images/logo.png";
import search from "../../../Images/search.png";
import "./header.css";
import { ModalHeader } from "./modal-header";
import { Modal } from "../Modal/modal";

export const ListHeader = props => {
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
    onchange,
    location,
    setLocation,
  } = props;

  return (
    <>
      <div className="Container-header">
        <div className="Container-header-Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Container-header-modal">
          <div className="Container-header-City" onClick={OpenModal}>
            <p>{location}</p>
          </div>
          <div className="Container-header-guest">
            <p>add guest</p>
          </div>
          <div className="Container-header-Search">
            <img src={search} alt="" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} CloseModal={CloseModal}>
        <ModalHeader
          city={city}
          isOpen={isOpen}
          CloseModal={CloseModal}
          OpenModal={OpenModal}
          adults={adults}
          children={children}
          guest={guest}
          locations={locations}
          setAdults={setAdults}
          setChildren={setChildren}
          setGuest={setGuest}
          setLocations={setLocations}
          setLocation={setLocation}
          location={location}
        />
      </Modal>
    </>
  );
};
