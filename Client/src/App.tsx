import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Pictures from "./components/pictures/Pictures";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Pictures />
      <Footer />
    </>
  );
};

export default App;
