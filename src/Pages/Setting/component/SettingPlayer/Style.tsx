import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  border-radius: 5px;
  padding: 10px;
`;

export const PlayerName = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const Select = styled.select`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Option = styled.option`
  text-transform: capitalize;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;

  background-color: transparent;
`;

const S = { Container, PlayerName, Label, Select, Option, Input };

export default S;
