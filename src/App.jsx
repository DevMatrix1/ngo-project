import { useState } from "react";
import "./App.css";
import { CarouselSlider } from "./components/Carousel/CarouselSlider";
import { Navbar } from "./components/Navbar/Navbar"
import Head from "./components/News/Head";
import BigCard from "./components/News/BigCard";
import data from "./components/News/data";
import Card from "./components/News/Cards";
// import MailForm from "./components/MailForm";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
function App() {
  const cards = data.map(i => {
    return (
      <Card
        img= {i.coverImg}
        para={i.title}
      />
    )
  })
  return (
    <>
    {/* <Home /> */}
    {/* <About/> */}
    
      <Navbar/>
      <CarouselSlider/>
      <Head/>
      <BigCard/>
      <section className="flex flex-wrap gap-8 mt-5 align-middle self-center justify-center text-black">
        {cards}
      </section>
    {/* <MailForm /> */}
    </>
    

  );
}

export default App;
