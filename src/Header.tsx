import React from "react";
import styled from "styled-components";

import { v3Colors } from "./lib/styleColors";

const Container = styled.div``;

const Title = styled.div`
  padding: 10px 10px 2px 10px;
  font-size: 16px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  padding: 0 10px;
  font-size: 10px;
  color: ${v3Colors.N90};
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Tapjoy employees helper</Title>
      <SubTitle>Automatically cover google-calendar & gmail</SubTitle>
    </Container>
  );
};

export default Header;
