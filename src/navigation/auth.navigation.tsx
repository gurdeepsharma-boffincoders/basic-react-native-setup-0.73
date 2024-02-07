import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login.screen';
import RegisterScreen from '../screens/Register.screen';
import SplashScreen from '../screens/Splash.screen';

const Stack = createStackNavigator();

export function AuthStackNavigation() {
  return (
    <Stack.Navigator initialRouteName='splash' screenOptions={{
     header(){
      return null
     }
    }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="splash" component={SplashScreen} />
    </Stack.Navigator>
  );
}
