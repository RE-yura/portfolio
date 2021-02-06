import React, { FC } from "react";
import styled from "styled-components";
import Work from "../../molecules/Work";
import WorkImgs from "../../../public/works/img";
import WorkVideos from "../../../public/works/video";

const Works: FC = () => {
  return (
    <Wrapper>
      {WorkImgs.map((img, idx) => {
        return (
          <Work
            key={idx}
            mode={"img"}
            src={"/works/img/" + img.fname}
            title={img.title}
            des={img.des}
            url={img.url ? img.url : null}
          />
        );
      })}
      {WorkVideos.map((video, idx) => {
        return (
          <Work
            key={idx}
            mode={"video"}
            src={"/works/video/" + video.fname}
            poster={"/works/img/" + video.poster}
            title={video.title}
            des={video.des}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  //   grid-auto-rows: 1fr;
  grid-gap: 10px 30px;
  padding: 0.8em 30px;
  width: 100%;
  justify-content: center;
  align-content: end;
`;

export default Works;
