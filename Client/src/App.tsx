import React, { FC, ReactElement } from "react";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";

import "./App.css";

const App: FC = (): ReactElement => {
  return (
    <>
      <Nav />
      <Body />
      <Login />
      <Signup />
      <Footer />
    </>
  );
};

export default App;
