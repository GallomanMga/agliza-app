import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'


export type TypeProps = 'primary' | 'secondary' 

type ContainerProps = {
    type: TypeProps,
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  flex:1;
  max-height: 56px;
  min-height: 41px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.SUCCESS_900 : theme.COLORS.GRAY_200};
`

export const Title = styled.Text`
  ${({ theme }) => css `
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS_FAMIlY.SEMIBOLD}
    font-size: ${theme.FONT_SIZE.MD}
  `}
`

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.BRAND_COLOR
}))``;