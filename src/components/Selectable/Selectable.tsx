import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";


export const SelectableContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 24px;
    border-width: 1px;
    padding-vertical: 12px;
    padding-horizontal: 20px;
    gap: 22px;
`

export interface SelectableProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const Selectable = ({ children, ...rest }: SelectableProps) => {
  return <SelectableContainer {...rest}>{children}</SelectableContainer>;
};

export default Selectable;
