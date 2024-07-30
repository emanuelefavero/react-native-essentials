import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Hello</Text>
      <Text style={styles.text}>World</Text>
      <Button
        title='Press me'
        onPress={() => alert('Button Pressed!')}
        color='#a855f7'
        accessibilityLabel='Press this button to show an alert'
      />

      <StatusBar style='light' backgroundColor='#070923' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070923',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#cbd5e1',
    fontWeight: 'semibold',
    fontSize: 32,
  },
  title: {
    color: '#a855f7',
    fontWeight: 'bold',
    fontSize: 48,
  },
})
