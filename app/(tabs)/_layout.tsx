import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Platform } from 'react-native';
import { appColors } from '@/constants/Colors';

const TabLayout = () => {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: appColors.button,
        tabBarInactiveTintColor: appColors.text,
        tabBarActiveBackgroundColor: appColors.background,
        tabBarInactiveBackgroundColor: appColors.background,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: appColors.background,
            borderTopWidth: 0,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons color={color} size={20} name={'home'} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
