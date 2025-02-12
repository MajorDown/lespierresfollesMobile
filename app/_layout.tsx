import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Header from '@/components/ui/Header';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    'Mynerve': Mynerve_400Regular,
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (<>
      <StatusBar style="dark" />
      <Stack> 
        <Stack.Screen name="(tabs)" options={{header: () => <Header />}} />
        <Stack.Screen name="+not-found" options={{header: () => <Header />}}/>
        <Stack.Screen name="settings" options={{header: () => <Header />}}/>
      </Stack>
  </>)

}

export default RootLayout;