import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

const RootLayout = () => {
  useEffect(() => {
    SplashScreen.hideAsync(); 
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(profile)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(services)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
