import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";


export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 0},
    end: { x: 0.5, y: 0.5}
}))`
   flex: 1;
   margin-top: 20px;

`

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    }
})`
    width: 100%;
    padding: 0 35px;
    
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    
    margin-bottom: 30px;
    align-self: flex-start;

    ${({ theme }) => css`
      font-family: ${theme.FONTS_FAMIlY.EXTRABOLD};
      color: ${theme.COLORS.BLACK}
    `}
`

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    margin-bottom: 30px;
    align-self: flex-start;

    ${({ theme }) => css`
      font-family: ${theme.FONTS_FAMIlY.REGULAR};
      color: ${theme.COLORS.BLACK}
    `}
`
