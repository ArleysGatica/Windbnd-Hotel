import React from "react";
import logo from "../../../Images/logo.png";
import search from "../../../Images/search.png";

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
      <div className="Container-header">
        <h1>holis</h1>
      </div>
    </>
  );
};
