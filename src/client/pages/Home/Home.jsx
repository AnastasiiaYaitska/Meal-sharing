import React from "react";
import Tagline from "../../components/Tagline/Tagline";
import Gallery from "../../components/Gallery/Gallery";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <Tagline />
      <button>Try it</button>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
