import { React, useState } from "react";
import { useModal } from "../Hook/hook";
import { ListHeader } from "./list-header";

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
  const [locations, setLocations] = useState(city[0]);

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
    />
  );
};
