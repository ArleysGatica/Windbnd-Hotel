import React from "react";
import { ListCard } from "../App/Components/List-Cards/list-card";
import { Header } from "../App/Components/Header/header";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="Container-header">
        <Header />
      </div>
      <div className="Home-Container-ListCard">
        <ListCard />
      </div>
    </>
  );
};

export default Home;
