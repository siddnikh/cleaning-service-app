import { StyleSheet, View, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  useEffect(() => {
    {Platform.OS == 'android' && ( 
      StatusBar.setTranslucent(true),
      StatusBar.setBarStyle('dark-content'),
      StatusBar.setBackgroundColor('transparent')
  )}
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Stack>
        <Stack.Screen name="serviceDetails" options={{ headerShown: false }} />
        <Stack.Screen name="booking" options={{ headerShown: false }} />
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

export default MainLayout;