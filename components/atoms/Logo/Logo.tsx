import React, { FC } from "react";
import styled from "styled-components";


type Props = {
  src: string;
  width?: number;
  height?: number;
  maxw?: number;
}

const Logo: FC<Props> = props => {
  const h = (props.height!=undefined) ? props.height : null;
  const w = (props.width!=undefined) ? props.width : null;
  return (
    <Wrapper w={w} h={h} maxw={props.maxw}> 
      <img src={props.src} width={w} height={h} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{w: number, h: number, maxw: number}>`
  width: ${props => props.w}px;
  height: ${props => props.h}px;
  margin: 5px;
  & > img {
    max-width: ${props => props.maxw}px;
  }
` 

export default Logo;
