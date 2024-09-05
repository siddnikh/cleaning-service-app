import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const AuthLayout = () => {
  
  return (
    <Stack>
        <Stack.Screen name="loginScreen3" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen2" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen8" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen7" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen4" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout;