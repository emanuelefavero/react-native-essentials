import styles from '@/styles/styles'
import darkStyles from '@/styles/darkStyles'
import { View, SafeAreaView, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import useLoadFonts from '@/hooks/useLoadFonts'
import Title from '@/components/Title'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'

export default function Layout() {
  const colorScheme = useColorScheme() // dark mode
  const { loaded, error } = useLoadFonts() // load fonts
  if (!loaded && !error) return null // show nothing while fonts are loading

  return (
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && darkStyles.background,
      ]}
    >
      {/* Status Bar */}
      <StatusBar style='auto' translucent />

      {/* App */}
      <View
        style={[
          styles.appContainer,
          colorScheme === 'dark' && darkStyles.background,
        ]}
      >
        <AddTodo />
        <Title />
        <Todos />
      </View>
    </SafeAreaView>
  )
}
