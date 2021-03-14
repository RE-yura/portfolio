import React from "react";
import styled from "styled-components";

const ModalWindow = (props) => {
  return (
    <Wrapper fullWindow={props.fullWindow} noShadow={props.noShadow}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ fullWindow?: boolean; noShadow?: boolean }>`
  display: inline-block;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.fullWindow ? "0px" : "8px")};
  ${(props) => (props.noShadow ? "border: 1px solid #dddee2" : "box-shadow: 0 3px 18px 0 rgba(54, 54, 54, 0.15);")}
`;

export default ModalWindow;
