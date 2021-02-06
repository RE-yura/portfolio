import React, { FC } from "react";
import styled from "styled-components";

const goToUrl = (url: string) => {
  window.open(url, "_blank");
};

type Props = {
  mode: string;
  src: string;
  poster?: string;
  title: string;
  des: string;
  url?: string;
};

const Work: FC<Props> = (props) => {
  const haveUrl =
    props.url != "" && props.url != null && props.url != undefined;
  return (
    <Wrapper>
      {props.mode == "img" ? (
        <img
          className={`frame ${haveUrl ? "link" : ""}`}
          src={props.src}
          onClick={haveUrl ? () => goToUrl(props.url) : null}
        />
      ) : props.mode == "video" ? (
        <video
          className="frame"
          poster={props.poster}
          controls
          playsInline={true}
          loop
          muted
        >
          <source src={props.src} type="video/mp4" />
          <p>動画を再生するにはvideoタグをサポートしたブラウザが必要です。</p>
        </video>
      ) : null}

      <div className="text">
        <div className="title">{props.title}</div>
        <div className="description">{props.des}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .link:hover,
  & > video:hover {
    cursor: pointer;
  }

  .frame {
    max-height: 300px;
    width: 100%;
    // max-width: 100%;
    object-fit: contain;
    height: 270px;
    object-position: 50% 100%;
  }
  .text {
    text-align: center;

    .title {
      font-size: 17px;
      color: #363636;
      margin-top: 10px;
    }
    .description {
      text-decoration: none;
      font-size: 14px;
      color: gray;
      margin-top: 10px;
      white-space: pre-wrap;
      margin-bottom: 30px;
    }
  }
`;

export default Work;
