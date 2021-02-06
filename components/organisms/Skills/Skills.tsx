import React, { FC } from "react";
import styled from "styled-components";
import LogoImgs from "../../../public/logo";
import CircledLogo from "../../molecules/CircledLogo";
import useNavStore from "../../../store/useNavStore";

const Skills: FC = () => {
  const [windowType] = useNavStore((store) => [store.windowType]);

  return (
    <Wrapper color={"black"} jcontent={windowType == "pc" ? "flex-start" : "space-evenly"}>
      {LogoImgs.map((logo, idx) => {
        // return <Logo key={idx} src={"/logo/"+logo.fname}/>
        return <CircledLogo key={idx} src={"/logo/" + logo.fname} percent={logo.percent} des={logo.des} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ jcontent?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  padding: 0.8em 30px;
  margin: 0 0 2em;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: ${(props) => props.jcontent};
  width: 100%;
  box-sizing: border-box;
  // padding: 10px 30px;
`;

export default Skills;
