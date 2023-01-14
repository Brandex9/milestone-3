import React, { FC, ReactElement } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Pictures from "./components/pictures/Pictures";
import Login from "./pages/Login/login";

import "./App.css";

const App: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Nav />
      <Login />
      <Pictures />
      <Footer />
    </>
  );
};

export default App;
