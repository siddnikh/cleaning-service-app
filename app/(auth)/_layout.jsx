import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const AuthLayout = () => {
  
  return (
    <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout;