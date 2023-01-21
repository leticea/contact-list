import React, { useState } from "react";
import * as C from "./styles";
import ReactInputMask from "react-input-mask";
import Grid from "../Grid";


const Form = ({ handleAdd, contactList, setContactList }) => {
  const [contactName, setContactName] = useState("");
  const [phonetNumber, setPhoneNumber] = useState("(99) 99999-9999");

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!contactName || !phonetNumber) {
      alert("Informe o nome e o telefone");
    }
  };

  const contact = {
    id: generateID(),
    contactName: contactName,
    phonetNumber: phonetNumber
  };

  handleAdd(contact);
  
  setContactName("");
  setPhoneNumber("");

  <ReactInputMask
    {...props}
    contactNumber={contactNumber}
    onBlur={e => {
      if (e.target.value.replace("-", "").length === 14) {
        setPhoneNumber("(99) 9999-9999");
      }
    }}
    onFocus={e => {
      if (e.target.value.replace("-", "").length === 14) {
        setPhoneNumber("(99) 99999-9999");
      }
    }}
  >
    {inputProps => <input {...inputProps} type="tel" />}

  </ReactInputMask>

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Nome</C.Label>
          <C.Input value={contactName} onChange={(e) => setContactName(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Telefone</C.Label>
          <C.Input value={phonetNumber} type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
        </C.InputContent>
        <C.Button onClick={handleSave}>ADICIONAR CONTATO</C.Button>
      </C.Container>
      <Grid itens={contactList} setItens={setContactList} />
    </>
  )
};

export default Form;