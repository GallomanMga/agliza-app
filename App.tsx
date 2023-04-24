import 'react-native-gesture-handler'

import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'


import { Loading } from './src/components/Loading';

import  { AuthProvider }  from './src/hooks/AuthContext';
import { RootNavigator } from './src/navigators/RootNavigator';





export default function App() {
  
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  })

  if( !fontsLoaded) {
    return <Loading />

  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#EBEBEB'
      />
      <AuthProvider>
           <RootNavigator />
      </AuthProvider>
    </ThemeProvider>
      
    
  );
}








