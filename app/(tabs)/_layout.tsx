import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { appColors } from '@/constants/Colors';
import TabsIcon from '@/components/ui/TabsIcon';

const Routes = [
  {
    name: 'index',
    icon: 'Home'
  },
  {
    name: 'Recherche',
    icon: 'Search'
  }
]


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
        {Routes.map((route, index) => (
          <Tabs.Screen
            name={route.name}
            options={{
              tabBarIcon: () => (
                <TabsIcon title={route.icon} />
              ),
            }}
          />
        ))}
    </Tabs>
  );
}

export default TabLayout;
