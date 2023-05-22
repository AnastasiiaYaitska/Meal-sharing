import React from "react";
import Tagline from "../../components/Tagline/Tagline";
import Gallery from "../../components/Gallery/Gallery";
import ButtonOnHomePage from "../../components/ButtonOnHomePage/ButtonOnHomePage";
import { HomeContainer, TaglineWrap } from "./Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <TaglineWrap>
        <Tagline />
        <ButtonOnHomePage />
      </TaglineWrap>
      <div>
        <Gallery />
      </div>
    </HomeContainer>
  );
};

export default Home;
