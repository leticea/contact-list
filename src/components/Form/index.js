import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, contactList, setContactList }) => {
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const generateID = () => Math.round(Math.random() * 1000); // gera um ID aleatório

  const handleSave = () => {
    if (!contactName || !phoneNumber) {
      alert("Informe o nome e o telefone!");
      return;
    }

    const contact = {
      id: generateID(),
      contactName: contactName,
      phoneNumber: phoneNumber
    };

    handleAdd(contact);

    setContactName("");
    setPhoneNumber("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Nome</C.Label>
          <C.Input value={contactName} onChange={(e) => setContactName(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Telefone</C.Label>
          <C.Input value={phoneNumber} placeholder="(99) 99999-9999 " type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
        </C.InputContent>
        <C.Button onClick={handleSave}>SALVAR CONTATO</C.Button>
      </C.Container>
      <Grid itens={contactList} setItens={setContactList}/>
    </>
  );
};

export default Form;