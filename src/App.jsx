import { useState } from "react";

import "./App.css";
import News from "./components/News/News";
import { Maintenance } from "./pages/Maintenance/Maintenance";
import { Navbar } from "./components/Navbar/Navbar";

// import Form from "./pages/Form/Form";

function App() {
  return (
    <>
    <Navbar/>
    <div className="mt-5">
      <News />
    </div>
    <Maintenance/>
      {/* <Form /> */}
    </>
  );
}

export default App;
