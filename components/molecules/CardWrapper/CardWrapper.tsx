import React, { FC } from "react";
import styled from "styled-components";
import Card from "../../atoms/Card";
import useNavStore from "../../../store/useNavStore";

type Props = {
  //   nav?: NavStoreType;
  year?: string;
  title?: string;
  text?: string;
  color?: string;
  mode?: string;
};

const CardWrapper: FC<Props> = (props) => {
  const [windowType] = useNavStore((store) => [store.windowType]);

  return windowType == "sp" ? (
    <Wrapper>
      <Card year={props.year} title={props.title} text={props.text} color={props.color} />
    </Wrapper>
  ) : props.mode == "left" ? (
    <LeftWrapper>
      <Card year={props.year} title={props.title} text={props.text} color={props.color} />
    </LeftWrapper>
  ) : props.mode == "right" ? (
    <RightWrapper>
      <Card year={props.year} title={props.title} text={props.text} color={props.color} />
    </RightWrapper>
  ) : null;
};

const Wrapper = styled.div`
  margin: 3.5em 0 0 auto;
  width: calc(100% - 45px);
  margin: 1.1em 0 1.1em auto !important;
  position: relative;

  :before {
    position: absolute;
    top: 30px;
    right: auto;
    left: -34px !important;
    content: "";
    display: block;
    width: 25px;
    height: 3px;
    background: #d1e9ff;
  }
`;

const LeftWrapper = styled.div`
  margin-bottom: 3.5em;
  width: calc(50% - 50px);
  position: relative;

  :before {
    position: absolute;
    top: 30px;
    right: -52px;
    content: "";
    display: block;
    width: 36px;
    height: 3px;
    background: #d1e9ff;
  }
`;

const RightWrapper = styled.div`
  margin: 3.5em 0 0 auto;
  width: calc(50% - 50px);
  position: relative;

  :before {
    position: absolute;
    top: 30px;
    left: -50px;
    content: "";
    display: block;
    width: 36px;
    height: 3px;
    background: #d1e9ff;
  }
`;

export default CardWrapper;
