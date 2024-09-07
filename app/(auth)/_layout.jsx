import { StyleSheet, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const AuthLayout = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Stack>
        <Stack.Screen name="loginScreen3" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen2" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen8" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen7" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen4" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen6" options={{ headerShown: false }} />
        <Stack.Screen name="createProfile" options={{ headerShown: false }} />
        <Stack.Screen name="interestsPage" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adjust this to match your app's background
  },
});

export default AuthLayout;