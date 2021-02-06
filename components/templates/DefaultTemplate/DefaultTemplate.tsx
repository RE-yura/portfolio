import React, { FC } from "react";
import styled from "styled-components";
import { Footer } from "../../organisms/Footer";
import Header from "../../organisms/Header";
import ViewersToast from "../../molecules/ViewersToast";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;

const StyledMain = styled.main`
  padding: 50px 0;
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DefaultTemplate: FC = (props) => {
  return (
    <Container>
      <Header />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
      <ViewersToast />
    </Container>
  );
};
