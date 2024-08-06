import styles from '@/styles'
import { useEffect } from 'react'
import { View, SafeAreaView, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Title from '@/components/Title'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const colorScheme = useColorScheme() // dark mode
  const [loaded, error] = useFonts({
    'SF Pro Rounded': require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
  }) // load fonts

  // Hide splash screen when loaded or error
  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync()
  }, [loaded, error])

  if (!loaded && !error) return null // return null when fonts are not loaded

  return (
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && styles.darkBackground,
      ]}
    >
      {/* Status Bar */}
      <StatusBar style='auto' translucent />

      {/* App */}
      <View
        style={[
          styles.appContainer,
          colorScheme === 'dark' && styles.darkBackground,
        ]}
      >
        <AddTodo />
        <Title />
        <Todos />
      </View>
    </SafeAreaView>
  )
}
