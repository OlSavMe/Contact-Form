import React from "react";
import "./App.css";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <ContactForm />
      <p style={{ margin: "3rem 0", left: "0", fontSize: "1.3rem" }}>
        Note: the form does not function in deployment due to the free Firebase
        plan and absence of SMTP service. Please check below the output I get in
        local environment.
      </p>
      <section
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   margin: "2rem auto",
      //   justifyContent: "space-even",
      //   width: "90%",
      // }}
      >
        <img
          src="images/message.jpg"
          alt="message"
          // style={{
          //   display: "flex",
          //   margin: "2rem auto",
          //   width: "50%",
          // }}
        ></img>
        <img src="images/submitted.jpg" alt="message"></img>
        <img src="images/payload.jpg" alt="message"></img>
        <img src="images/result.jpg" alt="message"></img>
      </section>
    </div>
  );
}

export default App;
