import 'react-native-gesture-handler';
import React from 'react'
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigatior/DrawerNavigator';
import { AppContextProvider } from './src/context/appContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AppContextProvider>
      { children }
    </AppContextProvider>
  )
}

export default App;
