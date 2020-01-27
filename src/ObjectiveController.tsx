import React from "react";
import styled from "styled-components";

import RadioButtonGroup from "./components/RadioButtonGroup";
import RadioButton from "./components/RadioButton";
import { useAppContext } from "./hooks/useAppContext";

const Controller = styled.div`
  padding: 10px 15px;
`;

const ObjectiveController: React.FC = () => {
  const { objective, setObjective } = useAppContext();
  return (
    <Controller>
      <RadioButtonGroup value={objective} onChange={setObjective}>
        <RadioButton label="PTO" value="PTO" />
        <RadioButton label="WFH" value="WFH" />
      </RadioButtonGroup>
    </Controller>
  );
};

export default ObjectiveController;
