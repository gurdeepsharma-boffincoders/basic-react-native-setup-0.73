import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
let navigation:any = useNavigation()

  useEffect(()=>{setTimeout(()=>{
      navigation.replace("login")
    },3000)},[])

  return (
    <View
      style={{
        backgroundColor: 'red',
        height: '100%',
      }}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
