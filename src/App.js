import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const data = localStorage.getItem("contacts");
  const [contactList, setContactList] = useState(
    data ? JSON.parse(data) : []
  );

  const handleAdd = (contact) => {
    const newArrayContacts = [...contactList, contact];

    setContactList(newArrayContacts);

    localStorage.setItem("contacts", JSON.stringify(newArrayContacts));
  }

  return (
    <>
    <Header />
    <Form handleAdd={handleAdd} contactList={contactList} setContactList={setContactList} />
    <GlobalStyle />
    </>
  );
};

export default App;

