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
    </div>
  );
}

export default App;
