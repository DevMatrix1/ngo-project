import { useState } from "react";

import "./App.css";

import { CarouselSlider } from "./components/Carousel/CarouselSlider";
import { Navbar } from "./components/Navbar/Navbar";

// import MailForm from "./components/MailForm";
import Form from "./pages/Form/Form";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <About/> */}

      {/* <Navbar />
      <CarouselSlider /> */}
      {/* <MailForm /> */}
      <Form />
    </>
  );
}

export default App;
