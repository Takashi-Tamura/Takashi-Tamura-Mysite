/* eslint @typescript-eslint/ban-ts-comment: 0 */

import React from "react";
import styled from "styled-components";
import Logo from "../Atoms/Logo";
import Humberger from "../Molecules/Humberger";

const Header: React.FC = () => {
  return (
    <LayoutHeader>
      {/* @ts-ignore */}
      <Logo />
      <Humberger />
    </LayoutHeader>
  );
};

const LayoutHeader = styled.div`
  width: 100%;
  padding: 32px 64px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;

export default Header;
