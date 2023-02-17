import React from "react";
import Footer from "../../components/Footer/Footer";
import MailForm from "../../components/MailForm";
import { Navbar } from "../../components/Navbar/Navbar";

function Form() {
  return (
    <div>
      <Navbar />
      <MailForm />
      <Footer/>
    </div>
  );
}

export default Form;
