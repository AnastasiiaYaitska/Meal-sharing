import React from "react";
import { Route, Switch } from "react-router-dom";
import MainWrapperContainer from "./components/WrapperContainer/WrapperContainer";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Meals from "./pages/Meals/Meals";
import MealDetails from "./pages/MealDetails/MealDetails";
import Reviews from "./pages/Reviews/Reviews";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <MainWrapperContainer>
      <Container>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/meals" exact component={Meals} />
            <Route path="/meals/:id" exact component={MealDetails} />
            <Route path="/review" exact component={Reviews} />
          </Switch>
        </main>
      </Container>
      <Footer />
      <GlobalStyle />
    </MainWrapperContainer>
  );
}

export default App;
