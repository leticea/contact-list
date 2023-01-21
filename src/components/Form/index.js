import React, { useState } from "react";
import * as C from "./styles";
import ReactInputMask from "react-input-mask";

const Form = () => {
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const generateID = () => Math.round(Math.random() * 1000); // gera um ID aleatório

  const handleSave = () => {
    if (!contactName || !phoneNumber) {
      alert("Informe o nome e o telefone!");
      return;
    }
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
          <C.ReactInputMask value={phoneNumber} type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
        </C.InputContent>
        <C.Button onClick={handleSave}>SALVAR CONTATO</C.Button>
      </C.Container>
    </>
  );
};

export default Form;