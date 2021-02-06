import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  id?: string;
  padding?: string;
}

const Logo: FC<Props> = props => {
  return (
    <Wrapper id={props.id} padding={props.padding}> 
      <span>{props.title}</span>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{padding: string}>`
  width: 100%;
  padding: ${props => props.padding ? props.padding:"0"};

  & > span {
    margin: 20px auto;
    display: block;
    text-align: center;
    font-size: 30px;
    color: #818181;
  }
` 

export default Logo;
