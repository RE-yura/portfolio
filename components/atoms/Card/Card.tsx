import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  year: string;
  title: string;
  text: string;
  color: string;
}

const Card: FC<Props> = props => {
  return (
    <Wrapper color={props.color}> 
      <div className="year">{props.year}</div>
      <div className="title">{props.title}</div>
      <div className="text">{props.text}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fff;
  border-top: solid 5px ${props => props.color};
  border-radius: 4px 4px 6px 6px;
  padding: 1.5em 2em;
  margin-bottom: 0;
  position: relative;

  .year {
    font-weight: 500;
    font-size: 0.87em;
    color: ${props => props.color};
  }
  .title {
    font-weight: bold;
    font-size: 1.2em;
    margin: 0.2em 0;
  }
  .text {
    white-space: pre-wrap;
    font-size: 0.92em;
    color: rgba(58,60,72,0.45);
  }
` 

export default Card;
