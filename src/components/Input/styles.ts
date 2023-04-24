import styled, { css } from 'styled-components/native'
import { TextInput, Text } from 'react-native'

export type TypeProps = 'primary' | 'secondary'

type Props = {
    type: TypeProps;
    label?: string;
}


export const Container = styled(TextInput).attrs<Props>(({ theme, type}) => ({ 
    placeholderTextColor: type === 'primary' ? theme.COLORS.GRAY_400 : theme.COLORS.GRAY_500
})) <Props>`
    width: 100%;
    height: 40px;
    background-color: transparent;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    padding: 7px 0;
    padding-left: 10px;
    margin-bottom: 10px;

    ${({ theme, type}) => css`
        font-family: ${theme.FONTS_FAMIlY.REGULAR};
        border: 1px solid ${theme.COLORS.GRAY_300}
        color: ${type === 'primary' ? theme.COLORS.GRAY_400 : theme.COLORS.BLACK}
    `}

`

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONTS_FAMIlY.REGULAR};
    color:  ${({ theme }) => theme.COLORS.BLACK}
`;