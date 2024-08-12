import React from "react";
import styled from "styled-components";

const StyledButton = (props) => {
  return (
    <ButtonContainer
      bkcolor={props.bkcolor}
      bdcolor={props.bdcolor}
      bdradius={props.bdradius}
      color={props.color}
      bkimage={props.bkimage}
      mwidth={props.mwidth}
      maxwidth={props.maxwidth}
      minwidth={props.minwidth}
      mheight={props.mheight}
      mpadding={props.mpadding}
      fsize={props.fsize}
      mopacity={props.mopacity}
      hv_bkcolor={props.hv_bkcolor}
    >
      {props.children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    `background-color: ${props.bkcolor};
     border: 1px solid ${props.bdcolor};
     border-radius: ${props.bdradius};
     color: ${props.color};
     background-image: url(${props.bkimage});
     width: ${props.mwidth};
     max-width: ${props.maxwidth};
     min-width: ${props.minwidth};
     height: ${props.mheight};
     padding: ${props.mpadding};
     font-size: ${props.fsize};
     opacity: ${props.mopacity};
    `}
  &: hover {
    opacity: 0.8;
    transition: 1s;
    ${(props) => `
    background-color: ${props.hv_bkcolor};
    `}
  }
`;

export default StyledButton;
