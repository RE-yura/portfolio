import React, { FC } from "react";
import styled from "styled-components";
import useNavStore from "../../../store/useNavStore";

const ViewersToast: FC = () => {
  const [viewers] = useNavStore((store) => [store.viewers]);
  if (viewers === 0) return <></>;
  return <Wrapper>現在{viewers}人が閲覧中です</Wrapper>;
};

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
