import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import { ForgotPassword, Login, Register } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.LOGIN}
        component={Login}
      />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        options={{ headerShown: false }}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
