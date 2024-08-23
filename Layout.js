import colors from '@/styles/colors'
import { View, SafeAreaView, useColorScheme, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import useLoadFonts from '@/hooks/useLoadFonts'
import Title from '@/components/Title'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'
import AreYouSureModal from '@/components/AreYouSureModal'

export default function Layout() {
  const colorScheme = useColorScheme() // dark mode
  const { loaded, error } = useLoadFonts() // load fonts

  if (!loaded && !error) return null // show nothing while fonts are loading

  return (
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && darkStyles.appSafeArea,
      ]}
    >
      {/* Status Bar */}
      <StatusBar style='auto' translucent />

      {/* App */}
      <View
        style={[
          styles.appContainer,
          colorScheme === 'dark' && darkStyles.appContainer,
        ]}
      >
        <AddTodo />
        <Title />
        <AreYouSureModal />
        <Todos />
      </View>
    </SafeAreaView>
  )
}

// ---

const styles = StyleSheet.create({
  appSafeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
})

const darkStyles = StyleSheet.create({
  appSafeArea: {
    backgroundColor: colors.backgroundDark,
  },

  appContainer: {
    backgroundColor: colors.backgroundDark,
  },
})
