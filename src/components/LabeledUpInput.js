import React from "react";
import styled from "styled-components";

const LabledUpInput = ({ id, label, ...rest }) => {
  return (
    <InputGroup>
      <InputField id={id} {...rest} />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </InputGroup>
  );
};

const InputGroup = styled.div`
  width: 100%;
  position: relative;
  font-size: 16px;
  user-select: none;
`;

const InputLabel = styled.label`
  color: #8d8d8d;
  position: absolute;
  top: 22px;
  left: 35px;
  background: #ffffff00;
  transition: 300ms;
  transform: translate(-50%, -50%);
`;

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #323339;
  border-radius: 12px;
  background-color: #212226;
  padding: 20px 12px 8px 12px;
  color: white;

  &:focus {
    border-color: #bb9b6c;
  }

  &:valid + ${InputLabel} {
    top: 12px;
    left: 24px;
    padding: 0 3px;
    font-size: 10px;
    color: #8d8d8d;
  }

  &:focus + ${InputLabel} {
    top: 12px;
    left: 24px;
    padding: 0 3px;
    font-size: 10px;
    color: #bb9b6c;
    transition: 300ms;
  }
`;
export default LabledUpInput;
