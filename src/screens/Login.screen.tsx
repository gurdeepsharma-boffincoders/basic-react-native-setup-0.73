import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  let navigation:any = useNavigation();
  return (
    <View>
      <Text>LoginScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("register");
        }}>
         <Text>Register</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
