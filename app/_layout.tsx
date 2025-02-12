import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

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
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade'
        }}
      > 
        <Stack.Screen name="main"  />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="settings" />
      </Stack>
  </>)

}

export default RootLayout;