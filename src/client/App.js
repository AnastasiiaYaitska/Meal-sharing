import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealsList from "./components/TestComponent/MealsList/MealsList";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Meals from "./pages/Meals/Meals";
import Reviews from "./pages/Reviews/Reviews";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Switch>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/meals" component={Meals} />
            <Route path="/review" component={Reviews} />
          </main>
        </Switch>
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
