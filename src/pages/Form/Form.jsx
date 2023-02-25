import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel";
import MailForm from "../../components/MailForm";
import { Navbar } from "../../components/Navbar/Navbar";

function Form() {
  return (
    <div>
      <Navbar />
      <HeaderCarousel />
      <MailForm />
      <Footer/>
    </div>
  );
}

export default Form;
