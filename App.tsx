import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { AuthStackNavigation } from './src/navigation/auth.navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <AuthStackNavigation />
    </NavigationContainer>
  );
}

export default App;
