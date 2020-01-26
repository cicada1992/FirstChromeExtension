import React from "react";
import styled from "styled-components";
import { v3Colors } from "./lib/styleColors";
import { useAppContext } from "./hooks/useAppContext";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px 25px;
  line-height: 30px;
  background: ${v3Colors.N10};
  float: right;

  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

const Wrapper = styled.div`
  float: right;
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.25s ease;

  width: 80px;
  padding: 5px 15px;
  font-size: 12px;
  color: ${v3Colors.N0};
  background: ${v3Colors.B100};
  border: 1px solid ${v3Colors.B100};

  &:hover:enabled {
    background: ${v3Colors.B110};
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
    transform: translateY(0);
  }
`;

const Footer: React.FC = () => {
  const { start, end } = useAppContext();
  const handleApplyClick = () => {
    console.log("send! start: ", start, "end: ", end);
    // campaignListListUIBoundActions.setStartDate(start);
    // campaignListListUIBoundActions.setEndDate(end);
  };

  return (
    <Container>
      <Wrapper>
        <Button onClick={handleApplyClick}>Send</Button>
      </Wrapper>
    </Container>
  );
};

export default Footer;
