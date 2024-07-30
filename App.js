import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  useColorScheme,
} from 'react-native'

export default function App() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && styles.darkBackground,
      ]}
    >
      <StatusBar style='auto' translucent />
      <View
        style={[
          styles.appContainer,
          colorScheme === 'dark' && styles.darkBackground,
        ]}
      >
        <View style={{ marginTop: 16 }}>
          <TextInput placeholder='New Todo' style={styles.input} />
          <Button title='Add Todo' />
        </View>
        <View>
          <Text>Todos</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // utils
  darkBackground: {
    backgroundColor: '#000',
  },

  // app
  appSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  input: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 8,
    fontSize: 16,
    borderRadius: 12,
  },
})
