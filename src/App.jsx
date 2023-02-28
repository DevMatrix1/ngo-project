import { useState } from "react";

import "./App.css";
import News from "./components/News/News";
import { Maintenance } from "./pages/Maintenance/Maintenance";
import { Navbar } from "./components/Navbar/Navbar";
import { Gallery } from "./components/Gallery/Gallery";

// import Form from "./pages/Form/Form";

function App() {
  return (
    <>
    <Navbar/>
   { <Gallery/>}
    <Maintenance/>
      {/* <Form /> */}
      

    </>
  );
}

export default App;
