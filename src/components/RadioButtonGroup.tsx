import React from "react";
import styled, { css } from "styled-components";

import { deepChildrenMap, isElementTypeOf } from "../lib/reactUtils";
import { v3Colors } from "../lib/styleColors";

import RadioButton from "./RadioButton";

const Container = styled.div<{
  width?: string;
  inline?: boolean;
  disabled?: boolean;
  useBorder?: boolean;
}>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  ${({ width }) => width && `width: ${width}`};
  ${({ useBorder }) =>
    useBorder &&
    css`
      border: solid 1px ${v3Colors.N60};
      border-radius: 3px;
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `};
`;

let groupIdx = 0;

function getNextGroupName() {
  return (++groupIdx + "_radio_buttons").toString();
}

export interface RadioButtonGroupProps {
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  vertical?: boolean;
  inline?: boolean;
  disabled?: boolean;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  value,
  width,
  vertical,
  inline,
  disabled,
  onChange
}) => {
  const groupName: string = getNextGroupName();

  const handleChildrenChange = (checked: boolean, value?: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const modifiedChildren = deepChildrenMap(children, child => {
    if (isElementTypeOf(child, RadioButton)) {
      const element = child as React.ReactElement<any>;
      const childValue = element.props.value;
      return React.cloneElement(element, {
        name: groupName,
        checked: value && value === childValue,
        onChange: handleChildrenChange,
        vertical
      });
    }
    return child;
  });

  return (
    <Container width={width} inline={inline} disabled={disabled}>
      {modifiedChildren}
    </Container>
  );
};

export default RadioButtonGroup;
