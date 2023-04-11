import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, ROUTES } from '../constants';
import { Home, Notifications, Wallet } from '../screens';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          switch (route.name) {
            case ROUTES.HOME_TAB:
              iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
              break;
            case ROUTES.SETTINGS_NAVIGATOR:
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            case ROUTES.WALLET:
              iconName = focused ? 'wallet' : 'wallet-outline';
              break;
            case ROUTES.NOTIFICATIONS:
              iconName = focused
                ? 'md-notifications-sharp'
                : 'md-notifications-outline';
              break;
            default:
              iconName = '';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
