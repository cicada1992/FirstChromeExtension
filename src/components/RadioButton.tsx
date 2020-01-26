import React from "react";
import styled, { css } from "styled-components";

import { v3Colors } from "../lib/styleColors";

const verticalStyle = css`
  display: block;

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

interface ContainerProps {
  vertical: boolean;
  buttonStyle?: boolean;
  disabled?: boolean;
}

interface LabelProps {
  checked?: boolean;
  noLabel?: boolean;
  marginRight?: number;
}

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  ${(props: ContainerProps) => (props.vertical ? verticalStyle : "")};
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-right: ${(props: LabelProps) => {
    if (props.marginRight) {
      return `${props.marginRight}px`;
    }
  }};
  margin-left: ${(props: LabelProps) => props.noLabel && "7px"};
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  user-select: none;
  transition: 0.15s ease all;
`;

const Input = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const Circle = styled.span`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 6px;
  background: ${v3Colors.N70};
  border-radius: 50%;
  vertical-align: middle;
  transition: 0.15s ease all;

  &:after {
    position: absolute;
    content: "";
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: ${v3Colors.N0};
    border-radius: 50%;
    transition: 0.15s ease all;
  }

  ${Input}:checked ~ & {
    background: ${v3Colors.B100};

    &:after {
      top: 6px;
      left: 6px;
      width: 6px;
      height: 6px;
    }
  }
`;

const Text = styled.span`
  vertical-align: middle;
  font-size: 13px;
`;

export interface RadioButtonProps {
  testId?: string;
  name?: string;
  label?: string | JSX.Element;
  value?: string;
  checked?: boolean;
  onChange?: (checked: boolean, value?: string) => void;
  marginRight?: number;
  vertical?: boolean;
  disabled?: boolean;
  width?: string;
}

class RadioButton extends React.PureComponent<RadioButtonProps> {
  handleInputChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    const { onChange, disabled } = this.props;
    if (!disabled && onChange) {
      const target = evt.currentTarget;
      onChange(target.checked, target.value);
    }
  };

  public render() {
    const {
      testId,
      name,
      value,
      label,
      checked,
      vertical,
      marginRight,
      disabled
    } = this.props;
    const noLabel = !label;
    return (
      <Container
        data-role="radioButton"
        data-test-id={testId}
        data-value={value}
        vertical={vertical}
        disabled={disabled}
      >
        <Label noLabel={noLabel} checked={checked} marginRight={marginRight}>
          <Input
            name={name}
            value={value}
            onChange={this.handleInputChange}
            checked={checked}
          />
          <Circle />
          <Text>{label}</Text>
        </Label>
      </Container>
    );
  }
}

export default RadioButton;
