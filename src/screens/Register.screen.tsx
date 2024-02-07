import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  let navigate: any = useNavigation();
  return (
    <View style={{
      backgroundColor:"#987678",
      height:"100%"
    }}>
      <Text>Register Customer</Text>
      <Pressable onPress={() => {
          navigate.goBack();
        }}>
       <Text> Go Back</Text>
      </Pressable>
      <Pressable onPress={() => {
          navigate.navigate('login');
        }}>
       <Text> Login</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;
