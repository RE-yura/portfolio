import React, { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #ffffff;
  img {
    margin-left: 0.5rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Footer: FC = () => {
// export function Footer() {
  return (
    <StyledFooter>
      © Copyright 2020 RE-yura
      {/* <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        {' '}
        <img src="/zeit.svg" alt="ZEIT Logo" />
      </a> */}
    </StyledFooter>
  );
}
