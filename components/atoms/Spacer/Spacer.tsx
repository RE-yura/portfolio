import React from "react";
import styled from "styled-components";

const Spacer = (props: any) => {
  return (
    <Wrapper height={props.height} {...props}>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{height?: string}>`
  display: block;
  width: 100%;
  height: ${props => props.height};
`

export default Spacer;
