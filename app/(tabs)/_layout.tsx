import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { appColors } from '@/constants/Colors';
import TabsIcon from '@/components/ui/TabsIcon';

const Routes = [
  {
    name: 'index',
    title: 'Home',
    icon: require('@/assets/images/home.png'),
  },
  {
    name: 'AddNewSite',
    title: 'Ajouter',
    icon: require('@/assets/images/addNew.png'),
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
        })
      }}>
      {Routes.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name}
          options={
            {
              title: route.title,
              tabBarIcon: () => <TabsIcon title={route.title} icon={route.icon} />
            }
          }
        />
      ))}
    </Tabs>
  );
}

export default TabLayout;
