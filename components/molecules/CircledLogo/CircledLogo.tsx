import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Logo from "../../atoms/Logo";
import useNavStore from "../../../store/useNavStore";

interface Props {
  //   nav?: NavStoreType;
  src?: string;
  percent?: number;
  des?: string;
}

const CircledLogo: FC<Props> = (props) => {
  const [windowType] = useNavStore((store) => [store.windowType]);

  const [percent, setPercent] = useState(0);
  const [hover, setHover] = useState(false);

  const onAnimation = () => {
    setPercent(0);
    setTimeout(() => setPercent(props.percent), 300);
  };

  useEffect(() => {
    setTimeout(() => setPercent(props.percent), 1000);
  });

  const ifHover = windowType == "pc" && hover;
  return (
    <Wrapper w={ifHover ? 100 : 90} h={ifHover ? 100 : 90} margin={ifHover ? 0 : 5}>
      <svg style={{ height: 0, width: 0 }}>
        <defs>
          <linearGradient id={"gradientId"} gradientTransform={`rotate(90)`}>
            <stop offset="0%" stopColor={"#87d068"} />
            <stop offset="100%" stopColor={"#108ee9"} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbar
        value={percent}
        styles={buildStyles({
          strokeLinecap: "round",
          pathTransition: percent === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
          pathColor: `url(#gradientId)`, //`rgba(62, 152, 199, ${percent / 100})`,
          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
      <Container className={`${props.des}`} fsize={ifHover ? 14 : 12}>
        <Logo src={props.src} height={ifHover ? 35 : 30} maxw={ifHover ? 60 : 55} />
        <span>{props.des}</span>
      </Container>
      {windowType == "pc" ? (
        <TransCircle
          id={1}
          onClick={onAnimation}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      ) : (
        <TransCircle id={1} onClick={onAnimation} />
      )}
    </Wrapper>
  );
};

const TransCircle = styled.div`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  @media screen and (min-width: 640px) {
    :hover {
      cursor: pointer;
    }
  }
`;

const Container = styled.div<{ fsize: number }>`
  position: absolute;
  background: white;
  top: 8px;
  left: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    margin: 0 auto;
  }
  & > span {
    width: 100%;
    font-size: ${(props) => props.fsize}px;
    color: #808080;
    margin-top: 2px;
  }
`;

const Wrapper = styled.div<{ w?: number; h?: number; margin?: number }>`
  width: ${(props) => (props.w ? props.w + "px" : "100px")};
  height: ${(props) => (props.h ? props.h + "px" : "100px")};
  margin: ${(props) => (props.margin ? props.margin + "px" : "0px")};
  position: relative;
  border-radius: 50%;

  // .Raspberry span{
  //   transform: translate3d(-10px, -4px, 0);
  // }
  // .JavaScript span{
  //   transform: translate3d(-8px, 0, 0);
  // }
  // .WordPress span{
  //   transform: translate3d(-10px, -2px, 0);
  // }
  // .Windows span{
  //   transform: translate3d(-5px, 0, 0);
  // }
  // .ROS2 img{
  //   transform: translate3d(0, 3px, 0);
  // }
  // .ROS {
  //   left: 13%;
  //   img{
  //     transform: translate3d(0, 4px, 0);
  //   }
  // }
`;

export default CircledLogo;
