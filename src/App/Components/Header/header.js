import { React, useState, useContext } from "react";
import { useModal } from "../Hook/hook";
import { ListHeader } from "./list-header";
import ContextProvider from "../../Context/contexthotel";
import Searchmodal from "../../../Images/Search-modal.png";

export const Header = () => {
  const city = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];

  const [isOpen, OpenModal, CloseModal] = useModal(false);
  const [adults, setAdults] = useState(0);
  const [Children, setChildren] = useState(0);
  const [guest, setGuest] = useState(0);
  const [locations, setLocations] = useState(city);
  const [ModalLocation, setModalLocation] = useState(false);
  const [ModalGuest, setModalGuest] = useState(false);

  const handleModalLocation = () => {
    OpenModal();
    setModalLocation(true);
  };

  const handleModalGuest = () => {
    OpenModal();
    setModalLocation(false);
  };

  const { location } = useContext(ContextProvider);

  return (
    <ListHeader
      isOpen={isOpen}
      CloseModal={CloseModal}
      OpenModal={OpenModal}
      city={city}
      adults={adults}
      Children={Children}
      guest={guest}
      locations={locations}
      setAdults={setAdults}
      setChildren={setChildren}
      setGuest={setGuest}
      setLocations={setLocations}
      handleModalLocation={handleModalLocation}
      ModalLocation={ModalLocation}
      setModalLocation={setModalLocation}
      handleModalGuest={handleModalGuest}
      ModalGuest={ModalGuest}
      setModalGuest={setModalGuest}
      location={location}
      Searchmodal={Searchmodal}
    />
  );
};