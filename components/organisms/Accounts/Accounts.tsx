import React, { FC } from "react";
import styled from "styled-components";
import Account from "../../molecules/Account";
import AccountLogos from "../../../public/accounts";

const Accounts: FC = () => {
  return (
    <Wrapper>
      {AccountLogos.map((logo, idx) => {
        return <Account key={idx} src={"/accounts/" + logo.fname} text={logo.des} url={logo.url} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  padding: 0.8em 50px;
  margin: 0 0 2em;
  width: 100%;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: flex-end;
`;

export default Accounts;
