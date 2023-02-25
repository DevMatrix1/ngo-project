import { useState } from "react";

import "./App.css";
import { Maintenance } from "./pages/Maintenance/Maintenance";
import { Navbar } from "./components/Navbar/Navbar";

// import Form from "./pages/Form/Form";

function App() {
  return (
    <>
    <Navbar/>
    <Maintenance/>
      {/* <Form /> */}
    </>
  );
}

export default App;
