import React, { FC, useState } from "react";
import styled from "styled-components";
import useNavStore from "../../../store/useNavStore";

const ViewersToast: FC = () => {
  const [viewers, adBlock] = useNavStore((store) => [store.viewers, store.adBlock]);
  const [showDescription, setShowDescription] = useState(false);

  if (adBlock)
    return (
      <Wrapper onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <Description visible={showDescription}>インターネット接続やアドブロック等を確認してください</Description>
        ネットワーク接続エラー
      </Wrapper>
    );
  if (viewers === 0) return <></>;
  return <Wrapper>現在{viewers}人が閲覧中</Wrapper>;
};

const Description = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 47px;
  left: 5%;
  width: 90%;
  padding: 6px 10px;
  font-size: 10px;
  line-height: 14px;
  background: white;
  color: #555;
  border: 2px solid #555;
  border-radius: 6px;
  display: block;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  /* 上に書いた状態までになるまでの時間やアニメーションなど指定 */
  -moz-transition: all 0.5s ease-in-out; /* Firefox */
  -webkit-transition: all 0.5s ease-in-out; /* Safari and Chrome */
  -o-transition: all 0.5s ease-in-out; /* Opera */
  transition: all 0.5s ease-in-out; /* Browsers that Support it */
  &:before {
    content: "";
    position: absolute;
    bottom: -17px;
    margin-left: 24px;
    border: 7px solid transparent;
    border-top: 10px solid white;
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -22.5px;
    left: 32px;
    border: 9px solid transparent;
    border-top: 13px solid #555;
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 6px;
  right: 4px;
  width: auto;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  background: darkgray;
  color: white;
  border-radius: 6px;
`;

export default ViewersToast;
