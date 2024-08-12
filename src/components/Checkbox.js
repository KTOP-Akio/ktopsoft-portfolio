import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const primaryColor = "#d3bc8e";
const Checkbox = (props) => {
  const { checked, setCheckedState, color } = props;

  const handleClick = () => {
    setCheckedState(!checked);
  };
  return (
    <CustomizedCheckBox checked={checked} onClick={handleClick} color={color}>
      <FaCheck />
    </CustomizedCheckBox>
  );
};

const CustomizedCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 12px;
  height: 12px;
  margin: 2px 0px 0px 0px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #ffffff00;
  &: hover {
    border: 1px solid #d3bc8e;
  }
  ${(props) =>
    props.checked === true &&
    `background-color: ${
      props.color === undefined ? primaryColor : props.color
    };
    color: white;
    &: hover {
      opacity: 0.8;
    }`}
`;

export default Checkbox;
