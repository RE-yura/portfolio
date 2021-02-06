import React, { Component, FC } from "react";
import styled from "styled-components";
import useNavStore from "../../../store/useNavStore";

const Top: FC = () => {
  const [windowType] = useNavStore((store) => [store.windowType]);

  return (
    <Wrapper>
      {/* ======== TOP Wrapper ========= */}
      {windowType == "pc" ? (
        <BgImage padding="220px 0 0 0" id="top">
          <h1>Welcome to RE-yura Page !!</h1>
          <p>Robotics Engineer</p>
        </BgImage>
      ) : windowType == "sp" ? (
        <BgImage padding="200px 0 0 0" id="top">
          <h1>
            Welcome to
            <br />
            RE-yura Page !!
          </h1>
          <p>Robotics Engineer</p>
        </BgImage>
      ) : null}
    </Wrapper>
  );
};

const BgImage = styled.div<{ padding?: string }>`
  width: 100%;
  height: 400px;
  padding: ${(props) => props.padding};

  background-repeat: no-repeat;
  background-position: 0 24%;
  background-size: cover;
  color: white;
  text-align: center;
  background-image: url("/top.jpg");
  position: relative;

  & > p {
    font-size: 18px;
  }

  :after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 0 -30px 20px -15px #edf2f7;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export default Top;
