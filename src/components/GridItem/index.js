import React from "react";
import * as C from "./styles";
import { FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.contactName}</C.Td>
      <C.Td>{item.phoneNumber}</C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  )
};

export default GridItem;