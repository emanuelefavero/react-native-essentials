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
        <View style={styles.addTodoContainer}>
          <TextInput
            placeholder='New Todo'
            placeholderTextColor={
              colorScheme === 'dark'
                ? 'rgb(129, 129, 136)'
                : 'rgb(145, 145, 152)'
            }
            style={[styles.input, colorScheme === 'dark' && styles.darkInput]}
          />
          <Button title='Add Todo' />
        </View>
        <View>
          <Text
            style={[styles.title, colorScheme === 'dark' && styles.darkTitle]}
          >
            Todos
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Dark mode utils
  darkBackground: {
    backgroundColor: '#000',
  },
  darkInput: {
    backgroundColor: 'rgb(28, 28, 30)',
    color: '#fff',
  },
  darkTitle: {
    color: '#fff',
  },

  // App
  appSafeArea: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 247)',
  },

  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(242, 242, 247)',
  },

  addTodoContainer: {
    // marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    backgroundColor: 'rgb(227, 227, 232)',
    color: 'rgb(0, 0, 0)',
    padding: 8,
    fontSize: 16,
    borderRadius: 10,
    marginRight: 2,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
})
