import React from "react";
import { ListCard } from "../App/Components/List-Cards/list-card";
import { Header } from "../App/Components/Header/header";
import "./home.css";
import { ContextProvider } from "../App/Context/contexthotel";

const Home = () => {
  return (
    <ContextProvider>
      <div className="Container-header">
        <Header />
      </div>
      <div className="Home-Container-ListCard">
        <ListCard />
      </div>
    </ContextProvider>
  );
};

export default Home;
