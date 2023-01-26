import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Maintenance } from "./pages/Maintenance/Maintenance";

function App() {
  return (
    <>
      <Navbar />
      <Maintenance/>
    </>
  );
}

export default App;
