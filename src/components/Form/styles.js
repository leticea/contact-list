import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  font-size: 24px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #015;
  background-color: #F7D354;
`;