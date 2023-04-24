import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    position: absolute;
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: '#000',
    size: 78
}))``