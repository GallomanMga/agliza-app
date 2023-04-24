import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import { HeaderContainer } from './styles';
import LogoAg from '../../assets/LogoBlack.svg';

type HeaderProps = {
  svgImage?: React.ReactElement<SvgProps>;
};

export default function HeaderSignIn({ svgImage }: HeaderProps) {
  return (
    <HeaderContainer>
      {svgImage ? (
        <Svg {...svgImage.props} />
      ) : (
        <LogoAg width={130} height={40} />
      )}
    </HeaderContainer>
  );
};
