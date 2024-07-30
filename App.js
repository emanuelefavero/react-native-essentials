// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appContainer}>
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
  appContainer: {
    flex: 1,
    padding: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 8,
    fontSize: 16,
    borderRadius: 12,
  },
})
