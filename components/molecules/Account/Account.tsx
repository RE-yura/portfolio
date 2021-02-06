import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";

type Props = {
  src: string;
  text: string;
  url: string;
}

const Account: FC<Props> = props => {
  // const h = 30;
  // const w = 30;
  return (
    <Wrapper
      href={props.url}
      target="_blank"
      > 
      <Container>
        <Logo src={props.src} width={50} height={50} />
        <span>{props.text}</span>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  height: 100%;
  line-height: 80px;
  width: fit-content;

  & > div {
    margin: auto 0;
    margin-right: 10px;
  }
  & > span {
    line-height: 80px;
    height: 100%;
    font-size: 14px;
    color: gray;
  }
`

const Wrapper = styled.a`
  height: 80px;
  background-color: #fff;
  text-decoration: none;
  position: relative;
  border: 2px solid #fff;
  // border-radius: 8px;
  outline: none;
  transition: all .2s;

  :before, :after {
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: 2;
    content: '';
    transition: all .3s;
  }
  :before {
    border-top: 2px solid #818181;
    border-bottom: 2px solid #818181;
    transform: scale(0, 1);
  }
  :after {
    border-right: 2px solid #818181;
    border-left: 2px solid #818181;
    transform: scale(1, 0);
  }
  :hover {
    :before {
      transform: scale(1);
    }
    :after {
      transform: scale(1);
    }
  }
    
` 

export default Account;
