import React from "react";
import styled from "styled-components";
import { useAppContext } from "./hooks/useAppContext";

const Container = styled.div`
  padding: 10px 15px;
`;

const Strong = styled.strong`
  margin: 0px 3px;
`;

const Preview: React.FC = () => {
  const { start, end, isFirstSelection, objective } = useAppContext();
  const startMonth = start.getMonth() + 1;
  const startDay = start.getDate();
  const endMonth = end.getMonth() + 1;
  const endDay = end.getDate();
  return (
    <Container>
      개인적인 사정으로 인해 {startMonth}월 {startDay}일
      {isFirstSelection && ` ~  ${endMonth}월 ${endDay}일`}
      <Strong>{objective}</Strong>
      사용합니다. 감사합니다.
    </Container>
  );
};

export default Preview;
