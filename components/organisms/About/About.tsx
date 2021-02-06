import React, { FC } from "react";
import styled from "styled-components";
import CardWrapper from "../../molecules/CardWrapper";
import AboutMeContent from "../../../config/aboutMeContent";
import useNavStore from "../../../store/useNavStore";

const About: FC = () => {
  const [windowType] = useNavStore((store) => [store.windowType]);

  return (
    <Wrapper left={windowType == "sp" ? "9px" : "50%"}>
      <span className="about-line" />
      {AboutMeContent.map((content, idx) => {
        return (
          <CardWrapper
            key={idx}
            year={content.year}
            title={content.title}
            text={content.text}
            color={content.color}
            mode={idx % 2 == 0 ? "left" : "right"}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ left: string }>`
  margin: 2.5em 3em 4.5em;
  padding: 2.5em 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .about-line {
    position: absolute;
    left: ${(props) => props.left};
    top: -1em;
    background: #d1e9ff;
    width: 3px;
    height: 100%;
    height: calc(100% + 1em);

    :before {
      position: absolute;
      content: "";
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #75bdff;
      display: block;
      top: 100%;
      left: -4px;
      left: -9px;
      top: 0;
      width: 15px;
      height: 15px;
      border: solid 3px #b6dcff;
    }

    :after {
      position: absolute;
      content: "";
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #75bdff;
      display: block;
      top: 100%;
      left: -4px;
    }
  }
`;

export default About;
