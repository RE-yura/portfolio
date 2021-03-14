import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import ModalWindow from "../../atoms/ModalWindow";
// import Map from "../../atoms/Map";
import dynamic from "next/dynamic";

interface IProps {
  onClose?: () => void;
}

const MapModal = (props: IProps) => {
  //   const [afterAll, setAfterAll] = useState(false);

  const Map = useMemo(
    () =>
      dynamic(() => import("../../atoms/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const modalContent = (
    <div className="inner">
      <Map />
    </div>
  );

  return (
    <Wrapper>
      <ModalWindow>
        <div className="inner">
          <Map />
        </div>
      </ModalWindow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 102;

  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);

  & .inner {
    // padding: 20px 30px;
    // width: 40vw;
    height: 100%;

    & > h2 {
      margin-right: 10px;
    }

    & .inner__pattern-options {
      padding-bottom: 20px;
      & > div {
        width: 60%;
        margin: 0 auto;
        padding: 10px 0;
        text-align: left;
        font-size: 14px;

        & label {
          padding-left: 10px;
        }
      }
    }

    & h2,
    svg {
      display: inline-block;
    }
  }
`;

export default MapModal;
