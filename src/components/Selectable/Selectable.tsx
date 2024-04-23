import React from "react";
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

const Selectable = ({ children, ...rest }: any) => {
  return <SelectableContainer {...rest}>{children}</SelectableContainer>;
};

export default Selectable;
